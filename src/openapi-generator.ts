import * as fs from 'fs/promises';
import * as path from 'path';

import { ESLint } from 'eslint';
import { glob } from 'glob';

const main = async () => {
  const files = await glob('./src/libs/openapi/models/*.ts');

  const modelsIndex = files
    .map((filename) => {
      return path.basename(filename).replace(path.extname(filename), '');
    })
    .map((basename) => `export * from './${basename}';`)
    .join('\n');

  await fs.writeFile('./src/libs/openapi/models/index.ts', modelsIndex);

  console.debug(`Created models/index.ts`);

  const eslint = new ESLint({ fix: true });
  const results = await eslint.lintFiles([
    './src/libs/openapi/models/index.ts',
  ]);
  await ESLint.outputFixes(results);
  console.debug(`Linted output`);
};

main().catch((e) => console.error(e));
