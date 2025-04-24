export const $PlatformSettingsDto = {
  properties: {
    resources: {
      type: 'dictionary',
      contains: {
        type: 'array',
        contains: {
          type: 'string',
        },
      },
      isRequired: true,
    },
  },
} as const;

export const $AccessTokenRequestDto = {
  properties: {
    appId: {
      type: 'string',
    },
    clientId: {
      type: 'string',
      isRequired: true,
    },
    clientSecret: {
      type: 'string',
    },
  },
} as const;

export const $JwtTokenDto = {
  properties: {
    access_token: {
      type: 'string',
      isRequired: true,
    },
    expires_in: {
      type: 'number',
      isRequired: true,
    },
    refresh_expires_in: {
      type: 'number',
      isRequired: true,
    },
    refresh_token: {
      type: 'string',
      isRequired: true,
    },
    token_type: {
      type: 'string',
      isRequired: true,
    },
    id_token: {
      type: 'string',
      isRequired: true,
    },
    'not-before-policy': {
      type: 'number',
      isRequired: true,
    },
    session_state: {
      type: 'string',
      isRequired: true,
    },
    scope: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $RefreshTokenRequestDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    refreshToken: {
      type: 'string',
      isRequired: true,
    },
    clientSecret: {
      type: 'string',
    },
  },
} as const;

export const $RepositoryAssetTypes = {
  type: 'Enum',
} as const;

export const $RepositoryAssetMetadataDto = {
  properties: {},
} as const;

export const $ModelType = {
  type: 'Enum',
} as const;

export const $ModelGender = {
  type: 'Enum',
} as const;

export const $Point3D = {
  properties: {
    x: {
      type: 'number',
      isRequired: true,
    },
    y: {
      type: 'number',
      isRequired: true,
    },
    z: {
      type: 'number',
      isRequired: true,
    },
  },
} as const;

export const $AvatarCameraConfig = {
  properties: {
    position: {
      type: 'Point3D',
      isRequired: true,
    },
    rotation: {
      type: 'Point3D',
      isRequired: true,
    },
  },
} as const;

export const $AvatarTTSOptions = {
  properties: {
    provider: {
      type: 'string',
    },
    model: {
      type: 'string',
    },
  },
} as const;

export const $RepositoryAvatarDto = {
  properties: {
    id: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'RepositoryAssetTypes',
      isRequired: true,
    },
    name: {
      type: 'string',
    },
    path: {
      type: 'string',
      isRequired: true,
    },
    metadata: {
      type: 'RepositoryAssetMetadataDto',
    },
    modelType: {
      type: 'ModelType',
      isRequired: true,
    },
    gender: {
      type: 'ModelGender',
      isRequired: true,
    },
    camera: {
      type: 'AvatarCameraConfig',
    },
    cameraMobile: {
      type: 'AvatarCameraConfig',
    },
    prompt: {
      type: 'string',
    },
    tts: {
      type: 'AvatarTTSOptions',
    },
  },
} as const;

export const $RepositoryBackgroundMetadataDto = {
  properties: {
    credits: {
      type: 'string',
    },
  },
} as const;

export const $RepositoryBackgroundDto = {
  properties: {
    id: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'RepositoryAssetTypes',
      isRequired: true,
    },
    name: {
      type: 'string',
    },
    path: {
      type: 'string',
      isRequired: true,
    },
    metadata: {
      type: 'RepositoryBackgroundMetadataDto',
    },
  },
} as const;

export const $RobotMapDto = {
  properties: {
    imageUrl: {
      type: 'string',
    },
    width: {
      type: 'number',
    },
    height: {
      type: 'number',
    },
    originOffsetX: {
      type: 'number',
    },
    originOffsetY: {
      type: 'number',
    },
  },
} as const;

export const $RepositoryRobotModelDto = {
  properties: {
    id: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'RepositoryAssetTypes',
      isRequired: true,
    },
    name: {
      type: 'string',
    },
    path: {
      type: 'string',
      isRequired: true,
    },
    metadata: {
      type: 'RepositoryAssetMetadataDto',
    },
    videoUrl: {
      type: 'string',
      isRequired: true,
    },
    map: {
      type: 'RobotMapDto',
    },
  },
} as const;

export const $RepositoryDocumentDto = {
  properties: {
    id: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'RepositoryAssetTypes',
      isRequired: true,
    },
    name: {
      type: 'string',
    },
    path: {
      type: 'string',
      isRequired: true,
    },
    metadata: {
      type: 'RepositoryAssetMetadataDto',
    },
  },
} as const;

export const $RepositoryAnimationDto = {
  properties: {
    id: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'RepositoryAssetTypes',
      isRequired: true,
    },
    name: {
      type: 'string',
    },
    path: {
      type: 'string',
      isRequired: true,
    },
    metadata: {
      type: 'RepositoryAssetMetadataDto',
    },
  },
} as const;

export const $RepositoryConfigDto = {
  properties: {
    avatars: {
      type: 'array',
      contains: {
        type: 'RepositoryAvatarDto',
      },
      isRequired: true,
    },
    backgrounds: {
      type: 'array',
      contains: {
        type: 'RepositoryBackgroundDto',
      },
      isRequired: true,
    },
    robots: {
      type: 'array',
      contains: {
        type: 'RepositoryRobotModelDto',
      },
    },
    documents: {
      type: 'array',
      contains: {
        type: 'RepositoryDocumentDto',
      },
    },
    animations: {
      type: 'array',
      contains: {
        type: 'RepositoryAnimationDto',
      },
    },
  },
} as const;

export const $KeycloakCredentials = {
  properties: {
    credentialData: {
      type: 'string',
      isRequired: true,
    },
    temporary: {
      type: 'boolean',
      isRequired: true,
    },
  },
} as const;

export const $AppUserDto = {
  properties: {
    enabled: {
      type: 'boolean',
      isRequired: true,
    },
    username: {
      type: 'string',
      isRequired: true,
    },
    email: {
      type: 'string',
      isRequired: true,
    },
    emailVerified: {
      type: 'boolean',
      isRequired: true,
    },
    credentials: {
      type: 'KeycloakCredentials',
      isRequired: true,
    },
    realmRoles: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
    clientRoles: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
    groups: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
    password: {
      type: 'string',
      isRequired: true,
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    attributes: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
    appId: {
      type: 'string',
    },
  },
} as const;

export const $ToolsParameterSchemaTypes = {
  type: 'Enum',
} as const;

export const $ToolsParameterSchema = {
  properties: {
    parameter: {
      type: 'string',
      description: `function parameter name`,
      isRequired: true,
    },
    type: {
      type: 'ToolsParameterSchemaTypes',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `description for the parameter, useful to give an hint while matching from the user input`,
      isRequired: true,
    },
    ignore: {
      type: 'boolean',
      description: `flag as required`,
    },
    value: {
      type: 'any-of',
      description: `provide a predefined value, useful to fill data otherwise missing from the context`,
      contains: [
        {
          type: 'string',
        },
        {
          type: 'number',
        },
        {
          type: 'boolean',
        },
      ],
    },
  },
} as const;

export const $ToolsRequestSchemaAuthBasic = {
  properties: {
    username: {
      type: 'string',
    },
    password: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $ToolsRequestSchemaAuthBearer = {
  properties: {
    clientType: {
      type: 'string',
      description: `Supported options are "client_credentials" or "password".`,
    },
    clientId: {
      type: 'string',
      description: `Required for client type "client_credentials"`,
    },
    clientSecret: {
      type: 'string',
      description: `Required for client type "client_credentials"`,
    },
    username: {
      type: 'string',
      description: `Required for client type "password"`,
    },
    password: {
      type: 'string',
      description: `Required for client type "password"`,
    },
    audience: {
      type: 'string',
    },
    tokenUrl: {
      type: 'string',
      isRequired: true,
    },
    refreshUrl: {
      type: 'string',
    },
  },
} as const;

export const $ToolsRequestSchema = {
  properties: {
    auth: {
      type: 'string',
      description: `Supported options are basic, bearer and module. Defaults to module if not specified.`,
    },
    basic: {
      type: 'all-of',
      description: `Used for "basic" auth type`,
      contains: [
        {
          type: 'ToolsRequestSchemaAuthBasic',
        },
      ],
    },
    bearer: {
      type: 'all-of',
      description: `Used for "bearer" auth type`,
      contains: [
        {
          type: 'ToolsRequestSchemaAuthBearer',
        },
      ],
    },
    moduleId: {
      type: 'string',
      description: `Reference to one of the modules (or clients) available in the app`,
      isRequired: true,
    },
    url: {
      type: 'string',
      description: `Url to call with a JSON POST. Leave empty to skip API calling`,
      isRequired: true,
    },
    headers: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
  },
} as const;

export const $AppToolsDTO = {
  properties: {
    name: {
      type: 'string',
      description: `Tool name used in the LLM, a descriptive name may help in identifying it correctly`,
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Tool description used in the LLM, this is key to correctly match the user intent`,
      isRequired: true,
    },
    schema: {
      type: 'array',
      contains: {
        type: 'ToolsParameterSchema',
      },
    },
    request: {
      type: 'all-of',
      description: `Provide details to trigger an HTTP API call on tool match`,
      contains: [
        {
          type: 'ToolsRequestSchema',
        },
      ],
    },
    emitter: {
      type: 'string',
      description: `Internal event emitted on match`,
    },
    returnDirect: {
      type: 'boolean',
    },
    skipResponse: {
      type: 'boolean',
      description: `Ignore the LLM response when the tool matches`,
    },
    url: {
      type: 'string',
      description: `API url to call on tool match, defaults to unauthenticated POST if no \`request\` are provided.`,
    },
  },
} as const;

export const $ModuleResourceDto = {
  properties: {
    resource: {
      type: 'string',
      description: `Resource of the module operation`,
      isRequired: true,
    },
    scope: {
      type: 'string',
      description: `Scope of the module operation`,
      isRequired: true,
    },
    context: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
    name: {
      type: 'string',
      description: `Name of the module operation`,
    },
    description: {
      type: 'string',
      description: `Description of the module operation`,
    },
    moduleId: {
      type: 'string',
      description: `Unique identifier of the module`,
      isRequired: true,
    },
    operationId: {
      type: 'string',
      description: `Operation to call from the module OpenAPI spec`,
      isRequired: true,
    },
    emitEvent: {
      type: 'boolean',
      description: `Indicate if an event should be emitted when this module resource is triggered. The format is app/:appId/<resource>/<scope>/[...context]`,
    },
  },
} as const;

export const $ModuleSettingsDto = {
  properties: {
    url: {
      type: 'string',
      description: `Service URL used to load .well-known`,
    },
    openapiSpec: {
      type: 'string',
      description: `Reference to a openapi specification to use to map requests to the modules`,
      isRequired: true,
    },
    asyncapiSpec: {
      type: 'string',
      description: `Reference to a asyncAPI specification to use to map requests to the modules`,
      isRequired: true,
    },
    resources: {
      type: 'array',
      contains: {
        type: 'ModuleResourceDto',
      },
      isRequired: true,
    },
  },
} as const;

export const $AppModuleConfigDto = {
  properties: {
    moduleId: {
      type: 'string',
      isRequired: true,
    },
    status: {
      type: 'string',
      description: `Status of the module. \`enabled\` by default. can be \`disabled\`. Set to \`failure\` if loading generates errors.`,
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    supports: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
    config: {
      type: 'ModuleSettingsDto',
      isRequired: true,
    },
    secret: {
      type: 'string',
    },
    appId: {
      type: 'string',
    },
  },
} as const;

export const $AppClientDto = {
  properties: {
    appId: {
      type: 'string',
    },
    name: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `The clientId, must be unique in the client list and in uuid format.`,
    },
    secret: {
      type: 'string',
    },
    permissions: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
  },
} as const;

export const $LLMSettingsDto = {
  properties: {},
} as const;

export const $AppPromptDto = {
  properties: {
    text: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $InteractionStartTypes = {
  type: 'Enum',
} as const;

export const $AppSettingsDto = {
  properties: {
    skipToolResponse: {
      type: 'boolean',
      description: `Skip the default tools response as generated by the LLM`,
    },
    ttsEnabled: {
      type: 'boolean',
      description: `Toggle text to speech (TTS) rendering`,
    },
    login: {
      type: 'boolean',
      description: `App requires login`,
    },
    chatModeEnabled: {
      type: 'boolean',
      description: `Toggle the free chat mode, enabled by default`,
    },
    avatar: {
      type: 'string',
      description: `Avatar ID`,
      isRequired: true,
    },
    language: {
      type: 'string',
      description: `Default interaction language such as en-GB `,
    },
    llm: {
      type: 'all-of',
      description: `LLM models settings`,
      contains: [
        {
          type: 'LLMSettingsDto',
        },
      ],
    },
    background: {
      type: 'string',
      description: `Kisok background image ID`,
      isRequired: true,
    },
    prompt: {
      type: 'all-of',
      description: `Application prompt to describe the scope of the application`,
      contains: [
        {
          type: 'AppPromptDto',
        },
      ],
    },
    skipWelcomeMessage: {
      type: 'boolean',
      description: `Toggle the welcome message sent at the start of a session`,
    },
    interactionStart: {
      type: 'InteractionStartTypes',
    },
    theme: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    githubRepository: {
      type: 'string',
      description: `Repository`,
    },
    impressum: {
      type: 'string',
      description: `Markdown formatted content with information about the app shown in navbar of the kiosk`,
    },
  },
} as const;

export const $TaskIntentDto = {
  properties: {
    name: {
      type: 'string',
      description: `Intent name used as identifier`,
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Intent description used to match with user input`,
    },
  },
} as const;

export const $TaskEventType = {
  type: 'Enum',
} as const;

export const $TaskEventTriggerDto = {
  properties: {
    name: {
      type: 'string',
      description: `Tool to trigger`,
    },
    values: {
      type: 'all-of',
      description: `Tool values passed to the tool handlers`,
      contains: [
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    condition: {
      type: 'string',
      description: `Evalute the condition based on values. {key} is replaced with its value.`,
    },
  },
} as const;

export const $TaskEventDto = {
  properties: {
    type: {
      type: 'TaskEventType',
      isRequired: true,
    },
    message: {
      type: 'string',
      description: `Chat message to send to the user`,
    },
    condition: {
      type: 'string',
      description: `Condition to trigger the event`,
    },
    trigger: {
      type: 'array',
      contains: {
        type: 'TaskEventTriggerDto',
      },
    },
  },
} as const;

export const $UIContentOptionsDto = {
  properties: {
    clearScreen: {
      type: 'boolean',
      description: `Clear the UI screen`,
    },
    ttsEnabled: {
      type: 'boolean',
      description: `Enable agent reading the content (text to speech)`,
    },
    stopSpeech: {
      type: 'boolean',
      description: `Stop the agent speech`,
    },
    language: {
      type: 'string',
      description: `Define the language of the content, it will be translated based on the language selected by the user.`,
    },
  },
} as const;

export const $TaskSchemaDataType = {
  type: 'Enum',
} as const;

export const $OptionSelection = {
  properties: {
    value: {
      type: 'string',
      description: `Selection value`,
      isRequired: true,
    },
    label: {
      type: 'string',
      description: `Selection label (value is used if not provided)`,
    },
    description: {
      type: 'string',
      description: `Description for an option`,
    },
    options: {
      type: 'string',
      description: `Addtional settings for this field`,
    },
  },
} as const;

export const $TaskFieldDto = {
  properties: {
    name: {
      type: 'string',
      description: `Name of the field`,
      isRequired: true,
    },
    label: {
      type: 'string',
      description: `Label of the field`,
    },
    hint: {
      type: 'string',
      description: `Provide context to be injected in the LLM prompt to improve handling user interactions`,
    },
    order: {
      type: 'number',
      description: `Priority order (lower first)`,
    },
    uiOptions: {
      type: 'all-of',
      description: `UI content options`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
      ],
    },
    skipResponse: {
      type: 'boolean',
      description: `Skip chat response`,
    },
    type: {
      type: 'TaskSchemaDataType',
      isRequired: true,
    },
    required: {
      type: 'boolean',
      description: `Indicate if the field is required`,
    },
    validation: {
      type: 'string',
      description: `A prompt to validate and transform the input`,
    },
    condition: {
      type: 'string',
      description: `Provde an activation condition based on the stored record list. If omitted, the field is always proposed to the user.`,
    },
    prompt: {
      type: 'string',
      description: `Provde a prompt for type=evaluate based on the available record fields. Placeholders such as {field-name} are replaced with the value of the field.`,
    },
    handler: {
      type: 'string',
      description: `Provde an handler for type=external to delegate the field handling to an external service`,
    },
    multiple: {
      type: 'boolean',
      description: `Allow to select multiple options`,
    },
    options: {
      type: 'array',
      contains: {
        type: 'OptionSelection',
      },
    },
  },
} as const;

export const $DialogueToolsRepositoryOptionsDto = {
  properties: {
    triggerOnce: {
      type: 'boolean',
      description: `Trigger one of the tools in the list once, then remove the tools.`,
    },
    exclusive: {
      type: 'boolean',
      description: `Alter the normal chat flow, assuming one of the available tools will provide an answer.`,
    },
  },
} as const;

export const $TaskOptionsDto = {
  properties: {
    triggerOnce: {
      type: 'boolean',
      description: `Trigger this task once, then remove it`,
    },
    removeRecord: {
      type: 'boolean',
      description: `Remove record on completion`,
    },
    enableTool: {
      type: 'boolean',
      description: `Enable this task as tool, allowing users to invoke it directly`,
    },
    toolOptions: {
      type: 'all-of',
      description: `Additional tool options configuration`,
      contains: [
        {
          type: 'DialogueToolsRepositoryOptionsDto',
        },
      ],
    },
    repositoryId: {
      type: 'string',
      description: `ID of the tool repository to add the tool to`,
    },
    list: {
      type: 'boolean',
      description: `Show this tool to the user, such as in the welcome message`,
    },
    oncePerSession: {
      type: 'boolean',
      description: `Allow this task to be completed only once per session`,
    },
    matchOrRemove: {
      type: 'boolean',
      description: `Cancel the task if the user answer does not match one of the task options`,
    },
  },
} as const;

export const $DialogueTaskDto = {
  properties: {
    taskId: {
      type: 'string',
      description: `Task ID`,
      isRequired: true,
    },
    appId: {
      type: 'string',
      description: `Application ID references`,
      isRequired: true,
    },
    hint: {
      type: 'string',
      description: `Provide context to be injected in the LLM prompt to improve handling user interactions`,
    },
    sessionId: {
      type: 'string',
      description: `Session ID references`,
    },
    name: {
      type: 'string',
      description: `Task name`,
      isRequired: true,
    },
    label: {
      type: 'string',
      description: `Task label`,
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Task description`,
    },
    intents: {
      type: 'array',
      contains: {
        type: 'TaskIntentDto',
      },
    },
    events: {
      type: 'array',
      contains: {
        type: 'TaskEventDto',
      },
    },
    fields: {
      type: 'array',
      contains: {
        type: 'TaskFieldDto',
      },
      isRequired: true,
    },
    options: {
      type: 'all-of',
      description: `Task options`,
      contains: [
        {
          type: 'TaskOptionsDto',
        },
      ],
    },
  },
} as const;

export const $RagDocumentsDto = {
  properties: {},
} as const;

export const $PlatformAppDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    public: {
      type: 'boolean',
    },
    name: {
      type: 'string',
      isRequired: true,
    },
    description: {
      type: 'string',
      isRequired: true,
    },
    ownerId: {
      type: 'string',
      description: `Owner of the application`,
      isRequired: true,
    },
    modules: {
      type: 'array',
      contains: {
        type: 'AppModuleConfigDto',
      },
      isRequired: true,
    },
    repository: {
      type: 'RepositoryConfigDto',
      isRequired: true,
    },
    clients: {
      type: 'array',
      contains: {
        type: 'AppClientDto',
      },
      isRequired: true,
    },
    settings: {
      type: 'AppSettingsDto',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
    },
    tools: {
      type: 'array',
      contains: {
        type: 'AppToolsDTO',
      },
    },
    tasks: {
      type: 'array',
      contains: {
        type: 'DialogueTaskDto',
      },
    },
    rag: {
      type: 'all-of',
      description: `List of RAG documents or urls to import`,
      contains: [
        {
          type: 'RagDocumentsDto',
        },
      ],
    },
  },
} as const;

export const $CreatePlatformAppDto = {
  properties: {
    public: {
      type: 'boolean',
    },
    name: {
      type: 'string',
      isRequired: true,
    },
    description: {
      type: 'string',
      isRequired: true,
    },
    ownerId: {
      type: 'string',
      description: `Owner of the application`,
      isRequired: true,
    },
    modules: {
      type: 'array',
      contains: {
        type: 'AppModuleConfigDto',
      },
      isRequired: true,
    },
    repository: {
      type: 'RepositoryConfigDto',
      isRequired: true,
    },
    clients: {
      type: 'array',
      contains: {
        type: 'AppClientDto',
      },
      isRequired: true,
    },
    settings: {
      type: 'AppSettingsDto',
    },
    tools: {
      type: 'array',
      contains: {
        type: 'AppToolsDTO',
      },
    },
    tasks: {
      type: 'array',
      contains: {
        type: 'DialogueTaskDto',
      },
    },
    rag: {
      type: 'all-of',
      description: `List of RAG documents or urls to import`,
      contains: [
        {
          type: 'RagDocumentsDto',
        },
      ],
    },
  },
} as const;

export const $PlatformAppExportFilterDto = {
  properties: {
    name: {
      type: 'string',
    },
    appId: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
  },
} as const;

export const $DialogueDocumentOptionsDto = {
  properties: {
    parser: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
  },
} as const;

export const $DialogueDocumentMetadataDto = {
  properties: {
    uri: {
      type: 'string',
    },
    source: {
      type: 'string',
    },
    filename: {
      type: 'string',
    },
    options: {
      type: 'all-of',
      description: `Configure the document import handling, such as parser`,
      contains: [
        {
          type: 'DialogueDocumentOptionsDto',
        },
      ],
    },
  },
} as const;

export const $DialogueDocumentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    documentId: {
      type: 'string',
      isRequired: true,
    },
    content: {
      type: 'string',
      isRequired: true,
    },
    metadata: {
      type: 'DialogueDocumentMetadataDto',
    },
  },
} as const;

export const $RagWebsiteDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    url: {
      type: 'string',
      isRequired: true,
    },
    filterPaths: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
  },
} as const;

export const $KeycloakJwtTokenResourceAccess = {
  properties: {},
} as const;

export const $AuthJwtUser = {
  properties: {
    exp: {
      type: 'number',
      isRequired: true,
    },
    iat: {
      type: 'number',
      isRequired: true,
    },
    auth_time: {
      type: 'number',
      isRequired: true,
    },
    jti: {
      type: 'string',
      isRequired: true,
    },
    iss: {
      type: 'string',
      isRequired: true,
    },
    aud: {
      type: 'string',
      isRequired: true,
    },
    sub: {
      type: 'string',
      isRequired: true,
    },
    typ: {
      type: 'string',
      isRequired: true,
    },
    azp: {
      type: 'string',
      isRequired: true,
    },
    nonce: {
      type: 'string',
      isRequired: true,
    },
    session_state: {
      type: 'string',
      isRequired: true,
    },
    acr: {
      type: 'string',
      isRequired: true,
    },
    scope: {
      type: 'string',
      isRequired: true,
    },
    sid: {
      type: 'string',
      isRequired: true,
    },
    email_verified: {
      type: 'boolean',
      isRequired: true,
    },
    name: {
      type: 'string',
      isRequired: true,
    },
    preferred_username: {
      type: 'string',
      isRequired: true,
    },
    given_name: {
      type: 'string',
      isRequired: true,
    },
    family_name: {
      type: 'string',
      isRequired: true,
    },
    email: {
      type: 'string',
      isRequired: true,
    },
    realm_access: {
      type: 'KeycloakJwtTokenResourceAccess',
      isRequired: true,
    },
    resource_access: {
      type: 'KeycloakJwtTokenResourceAccess',
      isRequired: true,
    },
    role: {
      type: 'string',
      isRequired: true,
    },
    appId: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
    roles: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
  },
} as const;

export const $LoginRequestDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    username: {
      type: 'string',
      isRequired: true,
    },
    password: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $LoginResponseDto = {
  properties: {
    access_token: {
      type: 'string',
      isRequired: true,
    },
    expires_in: {
      type: 'number',
      isRequired: true,
    },
    refresh_expires_in: {
      type: 'number',
      isRequired: true,
    },
    refresh_token: {
      type: 'string',
      isRequired: true,
    },
    token_type: {
      type: 'string',
      isRequired: true,
    },
    session_state: {
      type: 'string',
      isRequired: true,
    },
    scope: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $RegistrationRequestDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    firstName: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    username: {
      type: 'string',
      isRequired: true,
    },
    email: {
      type: 'string',
      isRequired: true,
    },
    password: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $RegistrationResponseDto = {
  properties: {
    userId: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $AuthorizationUser = {
  properties: {
    moduleId: {
      type: 'string',
      isRequired: true,
    },
    resource: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
    scopes: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
  },
} as const;

export const $UpdateUserRequestDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    password: {
      type: 'string',
    },
    roles: {
      type: 'string',
    },
    enabled: {
      type: 'boolean',
    },
    authorization: {
      type: 'array',
      contains: {
        type: 'AuthorizationUser',
      },
    },
  },
} as const;

export const $PlatformModuleConfigDto = {
  properties: {
    moduleId: {
      type: 'string',
      isRequired: true,
    },
    status: {
      type: 'string',
      description: `Status of the module. \`enabled\` by default. can be \`disabled\`. Set to \`failure\` if loading generates errors.`,
    },
    name: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    supports: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
    config: {
      type: 'ModuleSettingsDto',
      isRequired: true,
    },
    secret: {
      type: 'string',
    },
  },
} as const;

export const $ObjectDetectionType = {
  type: 'Enum',
} as const;

export const $ObjectDetectionRequest = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    image: {
      type: 'string',
      isRequired: true,
      format: 'byte',
    },
    detectionType: {
      type: 'ObjectDetectionType',
      isRequired: true,
    },
    filter: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
  },
} as const;

export const $SentimentAnalysisRequest = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    text: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $UserInteractionIntentionDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    moduleId: {
      type: 'string',
      description: `Module generating the event`,
      isRequired: true,
    },
    source: {
      type: 'string',
      isRequired: true,
    },
    probability: {
      type: 'number',
      isRequired: true,
    },
    interactionType: {
      type: 'Enum',
      isRequired: true,
    },
    sessionId: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $DialogueActor = {
  type: 'Enum',
} as const;

export const $DialogueTextToSpeechDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `User session identifier`,
    },
    actor: {
      type: 'DialogueActor',
    },
    text: {
      type: 'string',
      description: `Text to convert to speech. If emotion field is set, it will be converted to SSML. If also \`ssml\` field is set, this field will be ignored`,
    },
    gender: {
      type: 'string',
      description: `Assistant gender (M or F)`,
    },
    language: {
      type: 'string',
      description: `Text language`,
    },
    emotion: {
      type: 'string',
      description: `User emotion, if available`,
    },
    llm: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    avatar: {
      type: 'string',
      description: `The avatar id used for interaction`,
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    ttsEnabled: {
      type: 'boolean',
      description: `Toggle TTS rendering for this message`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
    ssml: {
      type: 'string',
      description: `SSML markup to render as speech.`,
    },
  },
} as const;

export const $DialogueMessageDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `User session identifier`,
    },
    actor: {
      type: 'DialogueActor',
    },
    text: {
      type: 'string',
      description: `Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.`,
      isRequired: true,
    },
    gender: {
      type: 'string',
      description: `Assistant gender (M or F)`,
    },
    language: {
      type: 'string',
      description: `Text language`,
    },
    emotion: {
      type: 'string',
      description: `User emotion, if available`,
    },
    llm: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    avatar: {
      type: 'string',
      description: `The avatar id used for interaction`,
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    ttsEnabled: {
      type: 'boolean',
      description: `Toggle TTS rendering for this message`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $LLMRole = {
  type: 'Enum',
} as const;

export const $MemoryMessageType = {
  type: 'Enum',
} as const;

export const $DialogueMemoryMessageDto = {
  properties: {
    content: {
      type: 'string',
      isRequired: true,
    },
    role: {
      type: 'LLMRole',
      isRequired: true,
    },
    type: {
      type: 'MemoryMessageType',
    },
    name: {
      type: 'string',
    },
    ts: {
      type: 'string',
      isRequired: true,
      format: 'date-time',
    },
    metadata: {
      type: 'all-of',
      contains: [
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
  },
} as const;

export const $DialogueTaskRecordDto = {
  properties: {
    recordId: {
      type: 'string',
      description: `Record ID`,
      isRequired: true,
    },
    taskId: {
      type: 'string',
      description: `Task ID`,
      isRequired: true,
    },
    appId: {
      type: 'string',
      description: `Application ID reference`,
      isRequired: true,
    },
    sessionId: {
      type: 'string',
      description: `Session ID reference`,
      isRequired: true,
    },
    status: {
      type: 'TaskEventType',
    },
    values: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
    updated: {
      type: 'string',
      description: `Updated date`,
      format: 'date-time',
    },
    created: {
      type: 'string',
      description: `Creation date`,
      format: 'date-time',
    },
  },
} as const;

export const $DialogueToolsRepositoryDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    repositoryId: {
      type: 'string',
      description: `Tool repository ID`,
    },
    options: {
      type: 'all-of',
      description: `Tool repository options`,
      contains: [
        {
          type: 'DialogueToolsRepositoryOptionsDto',
        },
      ],
    },
    tools: {
      type: 'array',
      contains: {
        type: 'unknown[]',
      },
    },
  },
} as const;

export const $SessionSearchFilter = {
  properties: {
    query: {
      type: 'all-of',
      description: `Query filter`,
      contains: [
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    limit: {
      type: 'number',
      description: `results limit`,
    },
    skip: {
      type: 'number',
      description: `results to skip from beginning`,
    },
    sort: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
  },
} as const;

export const $SessionProperties = {
  properties: {
    repositoryId: {
      type: 'string',
      description: `Reference to the current tool repository`,
    },
  },
} as const;

export const $SessionDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
    },
    agentId: {
      type: 'string',
      description: `Agent instance associated to the session`,
    },
    user: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
    modifiedAt: {
      type: 'string',
      isRequired: true,
      format: 'date-time',
    },
    createdAt: {
      type: 'string',
      isRequired: true,
      format: 'date-time',
    },
    closedAt: {
      type: 'string',
      isRequired: true,
      format: 'date-time',
    },
    settings: {
      type: 'AppSettingsDto',
    },
    properties: {
      type: 'SessionProperties',
    },
  },
} as const;

export const $SessionSupportRequestDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      isRequired: true,
    },
    code: {
      type: 'string',
      isRequired: true,
    },
    message: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $SessionSupportResponseDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    supportId: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $SessionStorageRecordDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    storageId: {
      type: 'string',
    },
    sessionId: {
      type: 'string',
    },
    data: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
  },
} as const;

export const $SessionStorageSearchDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    userId: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
    sessionId: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
    storageId: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
  },
} as const;

export const $AgentStatus = {
  type: 'Enum',
} as const;

export const $AgentHeartBeatEventDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    agentId: {
      type: 'string',
    },
    moduleId: {
      type: 'string',
      isRequired: true,
    },
    status: {
      type: 'AgentStatus',
      isRequired: true,
    },
    settings: {
      type: 'AppSettingsDto',
    },
  },
} as const;

export const $AgentEvaluatePromptOptionsDto = {
  properties: {
    history: {
      type: 'boolean',
      description: `Include chat history`,
    },
    documents: {
      type: 'boolean',
      description: `Include contents from documents`,
    },
    app: {
      type: 'boolean',
      description: `Include application prompt`,
    },
    avatar: {
      type: 'string',
      description: `Use specified avatar characterization prompt`,
    },
    json: {
      type: 'boolean',
      description: `Provide response as JSON`,
    },
    language: {
      type: 'string',
      description: `Response language`,
    },
  },
} as const;

export const $LLMProvider = {
  type: 'Enum',
} as const;

export const $AgentEvaluatePromptDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Id of the session`,
    },
    prompt: {
      type: 'string',
      description: `Prompt to evaluate`,
      isRequired: true,
    },
    options: {
      type: 'all-of',
      description: `Prompt options`,
      contains: [
        {
          type: 'AgentEvaluatePromptOptionsDto',
        },
      ],
    },
    provider: {
      type: 'LLMProvider',
    },
    model: {
      type: 'string',
      description: `LLM provider model name`,
    },
  },
} as const;

export const $AgentEvaluatePromptFormat = {
  type: 'Enum',
} as const;

export const $AgentEvaluatePromptResponseDto = {
  properties: {
    result: {
      type: 'string',
      description: `Result of the call`,
      isRequired: true,
    },
    format: {
      type: 'AgentEvaluatePromptFormat',
      isRequired: true,
    },
  },
} as const;

export const $UIContentMetadataDto = {
  properties: {
    repositoryId: {
      type: 'string',
      description: `Reference to a tool repository ID`,
    },
    chunks: {
      type: 'array',
      contains: {
        type: 'dictionary',
        contains: {
          properties: {},
        },
      },
    },
  },
} as const;

export const $SupportedContentTypes = {
  type: 'Enum',
} as const;

export const $ImageContentDto = {
  properties: {
    src: {
      type: 'string',
      isRequired: true,
    },
    width: {
      type: 'number',
    },
    height: {
      type: 'number',
    },
    alt: {
      type: 'string',
      isRequired: true,
    },
    isBackground: {
      type: 'boolean',
    },
  },
} as const;

export const $ImageUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'ImageContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $VideoContentDto = {
  properties: {
    sources: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
    type: {
      type: 'string',
      isRequired: true,
    },
    description: {
      type: 'string',
    },
    subtitle: {
      type: 'string',
    },
    thumb: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    width: {
      type: 'number',
    },
    height: {
      type: 'number',
    },
  },
} as const;

export const $VideoUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'VideoContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $PdfContentDto = {
  properties: {
    url: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $PdfUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'PdfContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $WebpageContentDto = {
  properties: {
    url: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $WebpageUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'WebpageContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $Supported3DTypes = {
  type: 'Enum',
} as const;

export const $ObjectContentDto = {
  properties: {
    url: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'Supported3DTypes',
      isRequired: true,
    },
  },
} as const;

export const $ObjectContentDtoWrapper = {
  properties: {
    list: {
      type: 'array',
      contains: {
        type: 'ObjectContentDto',
      },
      isRequired: true,
    },
  },
} as const;

export const $ObjectUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'ObjectContentDtoWrapper',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $TextContentDto = {
  properties: {
    text: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $TextUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'TextContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $QuizAnswerDto = {
  properties: {
    answerId: {
      type: 'string',
      isRequired: true,
    },
    answer: {
      type: 'string',
      isRequired: true,
    },
    reason: {
      type: 'string',
      isRequired: true,
    },
    correct: {
      type: 'boolean',
      isRequired: true,
    },
    answerImage: {
      type: 'ImageContentDto',
    },
  },
} as const;

export const $QuizContentDto = {
  properties: {
    question: {
      type: 'string',
      isRequired: true,
    },
    answers: {
      type: 'array',
      contains: {
        type: 'QuizAnswerDto',
      },
      isRequired: true,
    },
  },
} as const;

export const $QuizUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'QuizContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $ClearUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $ClearScreenDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $ButtonDto = {
  properties: {
    value: {
      type: 'string',
      description: `Button value`,
      isRequired: true,
    },
    id: {
      type: 'string',
    },
    label: {
      type: 'string',
      description: `Button label`,
    },
    description: {
      type: 'string',
      description: `Provide a description for the button`,
    },
    classes: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
  },
} as const;

export const $ButtonsContentDto = {
  properties: {
    label: {
      type: 'string',
      isRequired: true,
    },
    list: {
      type: 'array',
      contains: {
        type: 'ButtonDto',
      },
      isRequired: true,
    },
  },
} as const;

export const $ButtonsUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'ButtonsContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $DialogueMessageUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'DialogueMessageDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $LinkContentDto = {
  properties: {
    url: {
      type: 'string',
      isRequired: true,
    },
    label: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $LinkUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'LinkContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $HtmlContentDto = {
  properties: {
    html: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $HtmlUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'HtmlContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $EmailContentDto = {
  properties: {
    email: {
      type: 'string',
      isRequired: true,
    },
    label: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $EmailUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'EmailContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $SupportedAudioTypes = {
  type: 'Enum',
} as const;

export const $BackgroundAudioDto = {
  properties: {
    src: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'SupportedAudioTypes',
      isRequired: true,
    },
  },
} as const;

export const $BackgroundUIAudioDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'BackgroundAudioDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $UiInteractionButtonDto = {
  properties: {
    context: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
    element: {
      type: 'string',
      isRequired: true,
    },
    value: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $NavigationMenuItemDto = {
  properties: {
    label: {
      type: 'string',
      isRequired: true,
    },
    id: {
      type: 'string',
      isRequired: true,
    },
    url: {
      type: 'string',
    },
    group: {
      type: 'string',
    },
    selected: {
      type: 'boolean',
    },
    items: {
      type: 'array',
      contains: {
        type: 'NavigationMenuItemDto',
      },
    },
  },
} as const;

export const $NavigationMenuContentDto = {
  properties: {
    items: {
      type: 'array',
      contains: {
        type: 'NavigationMenuItemDto',
      },
      isRequired: true,
    },
  },
} as const;

export const $NavigationMenuUIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'NavigationMenuContentDto',
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $UIInteractionDTO = {
  properties: {
    context: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
    element: {
      type: 'string',
      isRequired: true,
    },
    value: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $UIContentDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    contentType: {
      type: 'SupportedContentTypes',
      isRequired: true,
    },
    content: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `Provide a description for the content`,
    },
    metadata: {
      type: 'all-of',
      description: `Provides metadata for the content`,
      contains: [
        {
          type: 'UIContentMetadataDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    options: {
      type: 'all-of',
      description: `Provides configuration options for the content`,
      contains: [
        {
          type: 'UIContentOptionsDto',
        },
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
    },
    messageId: {
      type: 'string',
      description: `Unique sortable ID used to group and sort messages`,
    },
    chunkId: {
      type: 'string',
      description: `Unique sortable ID used to sort chunks from the same messageId`,
    },
    isWelcome: {
      type: 'boolean',
      description: `Specify if it is a welcome message`,
    },
  },
} as const;

export const $QrCodePayloadDto = {
  properties: {
    version: {
      type: 'number',
      isRequired: true,
    },
    data: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $QrCodeDto = {
  properties: {
    imageDataUrl: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $UIModelMapBlendShapesRequestDto = {
  properties: {
    blendShapes: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
  },
} as const;

export const $UIModelMapBlendShapesResponseDto = {
  properties: {
    blendShapes: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
  },
} as const;

export const $UIAssetDto = {
  properties: {
    id: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'RepositoryAssetTypes',
      isRequired: true,
    },
    name: {
      type: 'string',
    },
    path: {
      type: 'string',
      isRequired: true,
    },
    metadata: {
      type: 'RepositoryAssetMetadataDto',
    },
    filename: {
      type: 'string',
    },
    appId: {
      type: 'string',
      isRequired: true,
    },
    userId: {
      type: 'string',
    },
    ts: {
      type: 'string',
      format: 'date-time',
    },
  },
} as const;

export const $Buffer = {
  properties: {},
} as const;

export const $LogType = {
  type: 'Enum',
} as const;

export const $DatasetRecordDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    sessionId: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'LogType',
    },
    label: {
      type: 'string',
      isRequired: true,
    },
    ts: {
      type: 'string',
      isRequired: true,
      format: 'date-time',
    },
    data: {
      type: 'all-of',
      contains: [
        {
          type: 'dictionary',
          contains: {
            properties: {},
          },
        },
      ],
      isRequired: true,
    },
  },
} as const;

export const $DatasetRecordFilterDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    types: {
      type: 'array',
      contains: {
        type: 'LogType',
      },
    },
  },
} as const;

export const $MonitoringRecordDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    sessionId: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'LogType',
    },
    label: {
      type: 'string',
      isRequired: true,
    },
    ts: {
      type: 'string',
      isRequired: true,
      format: 'date-time',
    },
  },
} as const;

export const $AdvancedDatasetRecordFilterDto = {
  properties: {
    appId: {
      type: 'string',
    },
    sessionId: {
      type: 'string',
    },
    type: {
      type: 'LogType',
    },
    label: {
      type: 'string',
    },
    sinceTs: {
      type: 'string',
      format: 'date-time',
    },
    untilTs: {
      type: 'string',
      format: 'date-time',
    },
  },
} as const;

export const $XRMarkerListRequestDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    markerId: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
    payload: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
    tags: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
  },
} as const;

export const $XRMarkerDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    markerId: {
      type: 'string',
      description: `ID of the marker`,
    },
    payload: {
      type: 'string',
      description: `Payload as decoded from the marker QR code`,
      isRequired: true,
    },
    tags: {
      type: 'array',
      contains: {
        type: 'string',
      },
    },
  },
} as const;

export const $XROcclusionResponseDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    occlusion: {
      type: 'boolean',
      isRequired: true,
    },
  },
} as const;

export const $PositionDto = {
  properties: {
    x: {
      type: 'number',
      isRequired: true,
    },
    y: {
      type: 'number',
      isRequired: true,
    },
    z: {
      type: 'number',
      isRequired: true,
    },
  },
} as const;

export const $OrientationDto = {
  properties: {
    x: {
      type: 'number',
      isRequired: true,
    },
    y: {
      type: 'number',
      isRequired: true,
    },
    z: {
      type: 'number',
      isRequired: true,
    },
    w: {
      type: 'number',
      isRequired: true,
    },
  },
} as const;

export const $PoseDto = {
  properties: {
    position: {
      type: 'PositionDto',
      isRequired: true,
    },
    orientation: {
      type: 'OrientationDto',
      isRequired: true,
    },
  },
} as const;

export const $MovementDto = {
  properties: {
    targetPosition: {
      type: 'PoseDto',
      isRequired: true,
    },
    personId: {
      type: 'string',
      isRequired: true,
    },
    path: {
      type: 'array',
      contains: {
        type: 'string',
      },
      isRequired: true,
    },
  },
} as const;

export const $MovementEventDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    movement: {
      type: 'MovementDto',
      isRequired: true,
    },
  },
} as const;

export const $SermasBaseDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
  },
} as const;

export const $ActuationDto = {
  properties: {
    payload: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
      isRequired: true,
    },
  },
} as const;

export const $ActuationEventDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    actuations: {
      type: 'array',
      contains: {
        type: 'ActuationDto',
      },
      isRequired: true,
    },
  },
} as const;

export const $LinearVelocityDto = {
  properties: {},
} as const;

export const $VelocityDto = {
  properties: {
    linear: {
      type: 'LinearVelocityDto',
      isRequired: true,
    },
    angular: {
      type: 'LinearVelocityDto',
      isRequired: true,
    },
  },
} as const;

export const $StatusDto = {
  properties: {
    actualPosition: {
      type: 'PoseDto',
      isRequired: true,
    },
    velocity: {
      type: 'VelocityDto',
      isRequired: true,
    },
  },
} as const;

export const $StatusEventDto = {
  properties: {
    appId: {
      type: 'string',
      isRequired: true,
    },
    clientId: {
      type: 'string',
      description: `Reference to the authenticated client the request originated from`,
    },
    requestId: {
      type: 'string',
      description: `Request identifier for monitoring purposes`,
    },
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    ts: {
      type: 'string',
      description: `Reference date`,
      format: 'date-time',
    },
    status: {
      type: 'StatusDto',
      isRequired: true,
    },
    robotId: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;
