import {
  FormatHelpers,
  TypeScriptGenerator,
  typeScriptDefaultModelNameConstraints,
} from '@asyncapi/modelina';
import { Parser } from '@asyncapi/parser';
import * as fs from 'fs/promises';
import * as path from 'path';

import { ESLint } from 'eslint';
import { glob } from 'glob';

const loadOpenApiModels = async () => {
  const list = await glob('./src/libs/openapi/models/*.ts');
  return list.map((file) =>
    path.basename(file).replace(path.extname(file), ''),
  );
};

const generateModels = async (raw: any) => {
  const openapiModelNames = await loadOpenApiModels();

  const json = JSON.parse(raw.toString());
  const generator = new TypeScriptGenerator({
    modelType: 'interface',
    moduleSystem: 'ESM',
    mapType: 'record',
    enumType: 'union',
    rawPropertyNames: true,
    constraints: {
      modelName: typeScriptDefaultModelNameConstraints({
        NAMING_FORMATTER: (name) => {
          // console.warn(name);
          return name;
        },
      }),
    },
    processorOptions: {
      interpreter: {
        ignoreAdditionalProperties: true,
      },
    },
  });
  const res = await generator.generate(json);

  const openapiImports: string[] = [];
  const asyncapiModels = res.filter((model) => {
    const keep = openapiModelNames.indexOf(model.modelName) === -1;
    if (!keep) openapiImports.push(model.modelName);
    return keep;
  });

  // console.log(asyncapiModels);
  // console.log(openapiImports);

  let models = asyncapiModels.reduce(
    (output, model) => `${output}\nexport ${model.result}\n`,
    '',
  );

  // console.log(models)

  models = [
    '// generated, do not edit',
    `import { ${openapiImports.join(',')} } from '../openapi'`,
    // `export { ${openapiImports.join(',')} }`,
    models,
  ].join('\n');

  // console.log(models);

  await fs.mkdir('./src/libs/asyncapi', { recursive: true });
  await fs.writeFile('./src/libs/asyncapi/models.ts', models);
  console.debug(`Wrote models`);

  return [asyncapiModels.map((model) => model.modelName), openapiImports];
};

const generateClient = async (
  raw: any,
  asyncapiModels: string[],
  openapiImports: string[],
) => {
  const parser = new Parser();
  const { document, diagnostics } = await parser.parse(raw);

  if (diagnostics && diagnostics.filter((m) => m.severity === 0).length) {
    console.error(diagnostics);
    return;
  }

  const capitalize = (str: string) => FormatHelpers.toPascalCase(str);

  const channels = document.channels().all();
  // console.log(JSON.stringify(document.json()));

  const api: Record<string, any[]> = {
    other: [],
  };

  channels.forEach((c) => {
    c.operations()
      .all()
      .forEach((op) => {
        if (!op.messages().length) return;

        const action = op.action();
        const isSubcribe = action === 'subscribe';

        const operationId = op.operationId();
        // const payload = FormatHelpers.toPascalCase(
        //   op.messages().at(0).payload().id(),
        // );
        const payload = op.messages().at(0).payload().id();

        const address = c.address();
        const [, , resource, scope] = address.split('/');

        const functionName =
          operationId ||
          `${isSubcribe ? 'on' : ''}${isSubcribe ? capitalize(resource) : resource}${capitalize(scope)}`;

        const paramsList: string[] = Array.from(
          new Set(address.split('/').filter((p) => p[0] === ':')),
        )
          .map((p) => p.substring(1))
          .map((p) => `${p}?: string`);

        let params = '';
        if (paramsList.length) {
          params = `, params?: { ${paramsList.join(', ')} }`;
        }

        let chunk: string = undefined;
        if (isSubcribe) {
          chunk = `
            async ${functionName}(fn: (event: ${payload}) => void | Promise<void> ${params}) : Promise<() => void> {
              return this.broker.subscribe<${payload}>("${address}", fn ${params ? ', params' : ''});
            }
            `;
        } else {
          chunk = `
            async ${functionName}(event: ${payload} ${params}) { 
              return this.broker.publish<${payload}>("${address}", event ${params ? ', params' : ''}); 
            }
            `;
        }

        const apiDetails = {
          action,
          payload,
          resource,
          scope,
          address,
          chunk,
          operationId,
        };

        if (!op.tags().length) {
          api.other.push(apiDetails);
          return;
        }

        op.tags()
          .all()
          .forEach((tag) => {
            const tagName = tag.name();
            api[tagName] = api[tagName] || [];
            api[tagName].push(apiDetails);
          });
      });
  });

  const classes: Record<string, string> = {};

  await Promise.all(
    Object.keys(api).map(async (tag) => {
      const items = api[tag];

      if (!items.length) return;

      const className = capitalize(tag);
      classes[tag] = className;

      const models = Array.from(new Set(items.map((c) => c.payload)));

      const asyncModels = models.filter((m) => asyncapiModels.indexOf(m) > -1);
      const apiModels = models.filter((m) => openapiImports.indexOf(m) > -1);

      const wrapper = `
        // generated, do not edit

        import { Broker } from '../broker'
        
        ${asyncModels.length ? `import { ${asyncModels.join(', ')} } from './models'` : ''}
        ${apiModels.length ? `import { ${apiModels.join(', ')} } from '../openapi/models'` : ''}

        export class ${className} {

          constructor(private readonly broker: Broker) {}

        ${items.map((c) => c.chunk).join('\n\n')}

        }`;

      await fs.writeFile(`./src/libs/asyncapi/${tag}.ts`, wrapper);
    }),
  );
  console.debug(`Created classes`);

  const asyncapiClassWrapper = `
    // generated, do not edit

    import { Broker } from '../broker'

    ${Object.keys(classes).reduce((output, tag) => {
      return `${output}        
        import { ${classes[tag]} } from './${tag}';`;
    }, '')}

    export default class AsyncApiClient {

      ${Object.keys(classes).reduce((output, tag) => {
        return `${output}        
        public readonly ${tag}: ${classes[tag]};`;
      }, '')}

      constructor(private readonly broker: Broker) {
        ${Object.keys(classes).reduce(
          (output, tag) => `${output}
            this.${tag} = new ${classes[tag]}(broker);`,
          '',
        )}
      }
    }
  `;

  await fs.writeFile('./src/libs/asyncapi/index.ts', asyncapiClassWrapper);

  const eslint = new ESLint({
    fix: true,
  });
  const results = await eslint.lintFiles(['./src/libs/asyncapi/*.ts']);
  await ESLint.outputFixes(results);
  console.debug(`Linted output`);
};

const main = async () => {
  const raw = (await fs.readFile('./asyncapi.json')).toString();

  const [asyncapiModels, openapiImports] = await generateModels(raw);
  await generateClient(raw, asyncapiModels, openapiImports);
};

main().catch((e) => console.error(e));
