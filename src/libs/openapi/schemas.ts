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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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

export const $AppPromptDto = {
  properties: {
    text: {
      type: 'string',
      isRequired: true,
    },
  },
} as const;

export const $AppSettingsDto = {
  properties: {
    ttsEnabled: {
      type: 'boolean',
    },
    login: {
      type: 'boolean',
    },
    avatar: {
      type: 'string',
      isRequired: true,
    },
    language: {
      type: 'string',
    },
    llm: {
      type: 'string',
    },
    background: {
      type: 'string',
      isRequired: true,
    },
    prompt: {
      type: 'AppPromptDto',
    },
    skipWelcomeMessage: {
      type: 'boolean',
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
      description: `parameter type (one of string,number,boolean)`,
      isRequired: true,
    },
    description: {
      type: 'string',
      description: `description for the parameter, useful to give an hint while matching from the user input`,
      isRequired: true,
    },
    required: {
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
      isRequired: true,
    },
    description: {
      type: 'string',
      isRequired: true,
    },
    schema: {
      type: 'array',
      contains: {
        type: 'ToolsParameterSchema',
      },
    },
    request: {
      type: 'ToolsRequestSchema',
    },
    emitter: {
      type: 'string',
    },
    returnDirect: {
      type: 'boolean',
    },
    url: {
      type: 'string',
    },
  },
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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

export const $DialogueDocumentMetadataDto = {
  properties: {
    uri: {
      type: 'string',
    },
    source: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    sessionId: {
      type: 'string',
      description: `User session identifier`,
    },
    messageId: {
      type: 'string',
      description: `Unique identifier of the message`,
    },
    actor: {
      type: 'DialogueActor',
      description: `Actor providing the text, can be user or agent`,
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
      type: 'string',
      description: `LLM engine to use`,
    },
    avatar: {
      type: 'string',
      description: `The avatar id used for interaction`,
    },
    chunkId: {
      type: 'number',
      description: `Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    sessionId: {
      type: 'string',
      description: `User session identifier`,
    },
    messageId: {
      type: 'string',
      description: `Unique identifier of the message`,
    },
    actor: {
      type: 'DialogueActor',
      description: `Actor providing the text, can be user or agent`,
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
      type: 'string',
      description: `LLM engine to use`,
    },
    avatar: {
      type: 'string',
      description: `The avatar id used for interaction`,
    },
    chunkId: {
      type: 'number',
      description: `Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    sessionId: {
      type: 'string',
      description: `Track the interaction session, if available`,
    },
    moduleId: {
      type: 'string',
      isRequired: true,
    },
    status: {
      type: 'AgentStatus',
      isRequired: true,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
    },
  },
} as const;

export const $ObjectContentDto = {
  properties: {
    url: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
      type: 'ObjectContentDto',
      isRequired: true,
    },
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
    },
  },
} as const;

export const $QuizAnswerDto = {
  properties: {
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
    },
  },
} as const;

export const $ButtonDto = {
  properties: {
    value: {
      type: 'string',
      isRequired: true,
    },
    id: {
      type: 'string',
    },
    label: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    metadata: {
      type: 'dictionary',
      contains: {
        properties: {},
      },
    },
    options: {
      type: 'UIContentOptionsDto',
    },
    chunkId: {
      type: 'number',
    },
    messageId: {
      type: 'string',
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

export const $ViewLogsRequestDto = {
  properties: {
    sessionId: {
      type: 'string',
      isRequired: true,
    },
    type: {
      type: 'Enum',
    },
    ts: {
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
    },
    actuations: {
      type: 'array',
      contains: {
        type: 'string',
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
    userId: {
      type: 'string',
      description: `Reference to the user interacting with the system`,
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
