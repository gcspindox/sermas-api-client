export type PlatformSettingsDto = {
  resources: Record<string, Array<string>>;
};

export type AccessTokenRequestDto = {
  appId?: string;
  clientId: string;
  clientSecret?: string;
};

export type JwtTokenDto = {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  'not-before-policy': number;
  session_state: string;
  scope: string;
};

export type RefreshTokenRequestDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  refreshToken: string;
  clientSecret?: string;
};

export type RepositoryAssetTypes =
  | 'avatars'
  | 'backgrounds'
  | 'robots'
  | 'documents'
  | 'animations';

export const RepositoryAssetTypesEnum = {
  AVATARS: 'avatars',
  BACKGROUNDS: 'backgrounds',
  ROBOTS: 'robots',
  DOCUMENTS: 'documents',
  ANIMATIONS: 'animations',
} as const;

export type RepositoryAssetMetadataDto = {};

export type ModelType = 'readyplayerme' | 'custom';

export const ModelTypeEnum = {
  READYPLAYERME: 'readyplayerme',
  CUSTOM: 'custom',
} as const;

export type ModelGender = 'M' | 'F';

export const ModelGenderEnum = {
  M: 'M',
  F: 'F',
} as const;

export type Point3D = {
  x: number;
  y: number;
  z: number;
};

export type AvatarCameraConfig = {
  position: Point3D;
  rotation: Point3D;
};

export type RepositoryAvatarDto = {
  id: string;
  type: RepositoryAssetTypes;
  name?: string;
  path: string;
  metadata?: RepositoryAssetMetadataDto;
  modelType: ModelType;
  gender: ModelGender;
  camera?: AvatarCameraConfig;
  cameraMobile?: AvatarCameraConfig;
  prompt?: string;
};

export type RepositoryBackgroundMetadataDto = {
  credits?: string;
};

export type RepositoryBackgroundDto = {
  id: string;
  type: RepositoryAssetTypes;
  name?: string;
  path: string;
  metadata?: RepositoryBackgroundMetadataDto;
};

export type RobotMapDto = {
  imageUrl?: string;
  width?: number;
  height?: number;
  originOffsetX?: number;
  originOffsetY?: number;
};

export type RepositoryRobotModelDto = {
  id: string;
  type: RepositoryAssetTypes;
  name?: string;
  path: string;
  metadata?: RepositoryAssetMetadataDto;
  videoUrl: string;
  map?: RobotMapDto;
};

export type RepositoryDocumentDto = {
  id: string;
  type: RepositoryAssetTypes;
  name?: string;
  path: string;
  metadata?: RepositoryAssetMetadataDto;
};

export type RepositoryAnimationDto = {
  id: string;
  type: RepositoryAssetTypes;
  name?: string;
  path: string;
  metadata?: RepositoryAssetMetadataDto;
};

export type RepositoryConfigDto = {
  avatars: Array<RepositoryAvatarDto>;
  backgrounds: Array<RepositoryBackgroundDto>;
  robots?: Array<RepositoryRobotModelDto>;
  documents?: Array<RepositoryDocumentDto>;
  animations?: Array<RepositoryAnimationDto>;
};

export type KeycloakCredentials = {
  credentialData: string;
  temporary: boolean;
};

export type AppUserDto = {
  enabled: boolean;
  username: string;
  email: string;
  emailVerified: boolean;
  credentials: KeycloakCredentials;
  realmRoles: Array<string>;
  clientRoles: Array<string>;
  groups: Array<string>;
  password: string;
  firstName?: string;
  lastName?: string;
  attributes: Record<string, unknown>;
  appId?: string;
};

/**
 * parameter type (one of string,number,boolean,object)
 */
export type ToolsParameterSchemaTypes =
  | 'string'
  | 'number'
  | 'boolean'
  | 'object';

export const ToolsParameterSchemaTypesEnum = {
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean',
  OBJECT: 'object',
} as const;

export type ToolsParameterSchema = {
  /**
   * function parameter name
   */
  parameter: string;
  type: ToolsParameterSchemaTypes;
  /**
   * description for the parameter, useful to give an hint while matching from the user input
   */
  description: string;
  /**
   * flag as required
   */
  ignore?: boolean;
  /**
   * provide a predefined value, useful to fill data otherwise missing from the context
   */
  value?: string | number | boolean;
};

export type ToolsRequestSchemaAuthBasic = {
  username?: string;
  password: string;
};

export type ToolsRequestSchemaAuthBearer = {
  /**
   * Supported options are "client_credentials" or "password".
   */
  clientType?: string;
  /**
   * Required for client type "client_credentials"
   */
  clientId?: string;
  /**
   * Required for client type "client_credentials"
   */
  clientSecret?: string;
  /**
   * Required for client type "password"
   */
  username?: string;
  /**
   * Required for client type "password"
   */
  password?: string;
  audience?: string;
  tokenUrl: string;
  refreshUrl?: string;
};

export type ToolsRequestSchema = {
  /**
   * Supported options are basic, bearer and module. Defaults to module if not specified.
   */
  auth?: string;
  /**
   * Used for "basic" auth type
   */
  basic?: ToolsRequestSchemaAuthBasic;
  /**
   * Used for "bearer" auth type
   */
  bearer?: ToolsRequestSchemaAuthBearer;
  /**
   * Reference to one of the modules (or clients) available in the app
   */
  moduleId: string;
  /**
   * Url to call with a JSON POST. Leave empty to skip API calling
   */
  url: string;
  headers?: Record<string, unknown>;
};

export type AppToolsDTO = {
  /**
   * Tool name used in the LLM, a descriptive name may help in identifying it correctly
   */
  name: string;
  /**
   * Tool description used in the LLM, this is key to correctly match the user intent
   */
  description: string;
  /**
   * List of parameters of the tool
   */
  schema?: Array<ToolsParameterSchema>;
  /**
   * Provide details to trigger an HTTP API call on tool match
   */
  request?: ToolsRequestSchema;
  /**
   * Internal event emitted on match
   */
  emitter?: string;
  returnDirect?: boolean;
  /**
   * Ignore the LLM response when the tool matches
   */
  skipResponse?: boolean;
  /**
   * API url to call on tool match, defaults to unauthenticated POST if no `request` are provided.
   */
  url?: string;
};

export type ModuleResourceDto = {
  /**
   * Resource of the module operation
   */
  resource: string;
  /**
   * Scope of the module operation
   */
  scope: string;
  /**
   * Additional context, added to the request and event topic when triggered. Can contain variable substituted from the  payload, such as :appId
   */
  context?: Array<string>;
  /**
   * Name of the module operation
   */
  name?: string;
  /**
   * Description of the module operation
   */
  description?: string;
  /**
   * Unique identifier of the module
   */
  moduleId: string;
  /**
   * Operation to call from the module OpenAPI spec
   */
  operationId: string;
  /**
   * Indicate if an event should be emitted when this module resource is triggered. The format is app/:appId/<resource>/<scope>/[...context]
   */
  emitEvent?: boolean;
};

export type ModuleSettingsDto = {
  /**
   * Service URL used to load .well-known
   */
  url?: string;
  /**
   * Reference to a openapi specification to use to map requests to the modules
   */
  openapiSpec: string;
  /**
   * Reference to a asyncAPI specification to use to map requests to the modules
   */
  asyncapiSpec: string;
  /**
   * List of managed resources and scopes for this module
   */
  resources: Array<ModuleResourceDto>;
};

export type AppModuleConfigDto = {
  moduleId: string;
  /**
   * Status of the module. `enabled` by default. can be `disabled`. Set to `failure` if loading generates errors.
   */
  status?: string;
  name?: string;
  description?: string;
  supports: Array<string>;
  config: ModuleSettingsDto;
  secret?: string;
  appId?: string;
};

export type AppClientDto = {
  appId?: string;
  name: string;
  /**
   * The clientId, must be unique in the client list and in uuid format.
   */
  clientId?: string;
  secret?: string;
  /**
   * A list of permissions for this client in the form [resource].[scope] e.g. detection.intent. User *.* for all permission
   */
  permissions: Array<string>;
};

export type AppPromptDto = {
  text: string;
};

export type InteractionStartTypes =
  | 'on-load'
  | 'touch'
  | 'speak'
  | 'intent-detection';

export const InteractionStartTypesEnum = {
  ON_LOAD: 'on-load',
  TOUCH: 'touch',
  SPEAK: 'speak',
  INTENT_DETECTION: 'intent-detection',
} as const;

export type AppSettingsDto = {
  skipToolResponse?: boolean;
  ttsEnabled?: boolean;
  login?: boolean;
  avatar: string;
  language?: string;
  llm?: Record<string, unknown>;
  background: string;
  prompt?: AppPromptDto;
  skipWelcomeMessage?: boolean;
  interactionStart?: InteractionStartTypes;
  theme?: Record<string, unknown>;
};

export type TaskIntentDto = {
  /**
   * Intent name used as identifier
   */
  name: string;
  /**
   * Intent description used to match with user input
   */
  description?: string;
};

/**
 * Status of the task
 */
export type TaskEventType = 'started' | 'completed' | 'ongoing' | 'aborted';

export const TaskEventTypeEnum = {
  STARTED: 'started',
  COMPLETED: 'completed',
  ONGOING: 'ongoing',
  ABORTED: 'aborted',
} as const;

export type TaskEventTriggerDto = {
  /**
   * Tool to trigger
   */
  name?: string;
  /**
   * Tool values passed to the tool handlers
   */
  values?: Record<string, unknown>;
  /**
   * Evalute the condition based on values. {key} is replaced with its value.
   */
  condition?: string;
};

export type TaskEventDto = {
  type: TaskEventType;
  /**
   * Chat message to send to the user
   */
  message?: string;
  /**
   * Condition to trigger the event
   */
  condition?: string;
  /**
   * Trigger a tool
   */
  trigger?: Array<TaskEventTriggerDto>;
};

/**
 * Data type
 */
export type TaskSchemaDataType =
  | 'text'
  | 'boolean'
  | 'date'
  | 'select'
  | 'eval'
  | 'external';

export const TaskSchemaDataTypeEnum = {
  TEXT: 'text',
  BOOLEAN: 'boolean',
  DATE: 'date',
  SELECT: 'select',
  EVAL: 'eval',
  EXTERNAL: 'external',
} as const;

export type OptionSelection = {
  /**
   * Selection value
   */
  value: string;
  /**
   * Selection label (value is used if not provided)
   */
  label?: string;
  /**
   * Description for an option
   */
  description?: string;
};

export type TaskFieldDto = {
  /**
   * Name of the field
   */
  name: string;
  /**
   * Label of the field
   */
  label?: string;
  /**
   * Priority order (lower first)
   */
  order?: number;
  type: TaskSchemaDataType;
  /**
   * Indicate if the field is required
   */
  required?: boolean;
  /**
   * A prompt to validate and transform the input
   */
  validation?: string;
  /**
   * Provde an activation condition based on the stored record list. If omitted, the field is always proposed to the user.
   */
  condition?: string;
  /**
   * Provde a prompt for type=evaluate based on the available record fields. Placeholders such as {field-name} are replaced with the value of the field.
   */
  prompt?: string;
  /**
   * Provde an handler for type=external to delegate the field handling to an external service
   */
  handler?: string;
  /**
   * Allow to select multiple options
   */
  multiple?: boolean;
  /**
   * List of valid options
   */
  options?: Array<OptionSelection>;
};

export type DialogueToolsRepositoryOptionsDto = {
  /**
   * Trigger one of the tools in the list once, then remove the tools.
   */
  triggerOnce?: boolean;
  /**
   * Alter the normal chat flow, assuming one of the available tools will provide an answer.
   */
  exclusive?: boolean;
};

export type TaskOptionsDto = {
  /**
   * Trigger this task once, then remove it
   */
  triggerOnce?: boolean;
  /**
   * Remove record on completion
   */
  removeRecord?: boolean;
  /**
   * Enable this task as tool, allowing users to invoke it directly
   */
  enableTool?: boolean;
  /**
   * Additional tool options configuration
   */
  toolOptions?: DialogueToolsRepositoryOptionsDto;
  /**
   * ID of the tool repository to add the tool to
   */
  repositoryId?: string;
};

export type DialogueTaskDto = {
  /**
   * Task ID
   */
  taskId: string;
  /**
   * Application ID references
   */
  appId: string;
  /**
   * Session ID references
   */
  sessionId?: string;
  /**
   * Task name
   */
  name: string;
  /**
   * Task description
   */
  description?: string;
  /**
   * A list of intents to evaluate when the user interacts with the agent
   */
  intents?: Array<TaskIntentDto>;
  /**
   * Map task events
   */
  events?: Array<TaskEventDto>;
  /**
   * Task fields
   */
  fields: Array<TaskFieldDto>;
  /**
   * Task options
   */
  options?: TaskOptionsDto;
};

export type RagDocumentsDto = {};

export type PlatformAppDto = {
  appId: string;
  public?: boolean;
  name: string;
  description: string;
  /**
   * Owner of the application
   */
  ownerId: string;
  modules: Array<AppModuleConfigDto>;
  repository: RepositoryConfigDto;
  clients: Array<AppClientDto>;
  settings?: AppSettingsDto;
  createdAt?: string;
  updatedAt?: string;
  /**
   * Application tools offered by the application
   */
  tools?: Array<AppToolsDTO>;
  /**
   * Structured tasks offered by the application
   */
  tasks?: Array<DialogueTaskDto>;
  /**
   * List of RAG documents or urls to import
   */
  rag?: RagDocumentsDto;
};

export type CreatePlatformAppDto = {
  public?: boolean;
  name: string;
  description: string;
  /**
   * Owner of the application
   */
  ownerId: string;
  modules: Array<AppModuleConfigDto>;
  repository: RepositoryConfigDto;
  clients: Array<AppClientDto>;
  settings?: AppSettingsDto;
  /**
   * Application tools offered by the application
   */
  tools?: Array<AppToolsDTO>;
  /**
   * Structured tasks offered by the application
   */
  tasks?: Array<DialogueTaskDto>;
  /**
   * List of RAG documents or urls to import
   */
  rag?: RagDocumentsDto;
};

export type PlatformAppExportFilterDto = {
  name?: string;
  appId?: Array<string>;
};

export type DialogueDocumentMetadataDto = {
  uri?: string;
  source?: string;
};

export type DialogueDocumentOptionsDto = {
  /**
   * Define the document splitting strategy. "phrase" split by sentence, "single-line" use each line as document, "double-line" use double break-line as document
   */
  parser?: Record<string, unknown>;
};

export type DialogueDocumentDto = {
  appId: string;
  documentId: string;
  content: string;
  metadata: DialogueDocumentMetadataDto;
  /**
   * Configure the document import handling, such as parser
   */
  options: DialogueDocumentOptionsDto;
};

export type RagWebsiteDto = {
  appId: string;
  url: string;
  filterPaths: Array<string>;
};

export type KeycloakJwtTokenResourceAccess = {};

export type AuthJwtUser = {
  exp: number;
  iat: number;
  auth_time: number;
  jti: string;
  iss: string;
  aud: string;
  sub: string;
  typ: string;
  azp: string;
  nonce: string;
  session_state: string;
  acr: string;
  scope: string;
  sid: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
  realm_access: KeycloakJwtTokenResourceAccess;
  resource_access: KeycloakJwtTokenResourceAccess;
  role: string;
  appId: Array<string>;
  roles: Array<string>;
};

export type LoginRequestDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  username: string;
  password: string;
};

export type LoginResponseDto = {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  session_state: string;
  scope: string;
};

export type RegistrationRequestDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  firstName?: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
};

export type RegistrationResponseDto = {
  userId: string;
};

export type AuthorizationUser = {
  moduleId: string;
  resource: Array<string>;
  scopes: Array<string>;
};

export type UpdateUserRequestDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  password?: string;
  roles?: string;
  enabled?: boolean;
  authorization?: Array<AuthorizationUser>;
};

export type PlatformModuleConfigDto = {
  moduleId: string;
  /**
   * Status of the module. `enabled` by default. can be `disabled`. Set to `failure` if loading generates errors.
   */
  status?: string;
  name?: string;
  description?: string;
  supports: Array<string>;
  config: ModuleSettingsDto;
  secret?: string;
};

export type ObjectDetectionType = 'CARRIED_OBJECT';

export const ObjectDetectionTypeEnum = {
  CARRIED_OBJECT: 'CARRIED_OBJECT',
} as const;

export type ObjectDetectionRequest = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  image: string;
  detectionType: ObjectDetectionType;
  filter: Array<string>;
};

export type SentimentAnalysisRequest = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  text: string;
};

export type UserInteractionIntentionDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Module generating the event
   */
  moduleId: string;
  source: string;
  probability: number;
  interactionType: 'start' | 'stop';
  sessionId: string;
};

export const InteractionTypeEnum = {
  START: 'start',
  STOP: 'stop',
} as const;

/**
 * Actor providing the text, can be user or agent
 */
export type DialogueActor = 'user' | 'agent';

export const DialogueActorEnum = {
  USER: 'user',
  AGENT: 'agent',
} as const;

export type DialogueTextToSpeechDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * User session identifier
   */
  sessionId?: string;
  actor?: DialogueActor;
  /**
   * Text to convert to speech. If emotion field is set, it will be converted to SSML. If also `ssml` field is set, this field will be ignored
   */
  text?: string;
  /**
   * Assistant gender (M or F)
   */
  gender?: string;
  /**
   * Text language
   */
  language?: string;
  /**
   * User emotion, if available
   */
  emotion?: string;
  /**
   * LLM engine to use
   */
  llm?: Record<string, unknown>;
  /**
   * The avatar id used for interaction
   */
  avatar?: string;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
  /**
   * SSML markup to render as speech.
   */
  ssml?: string;
};

export type DialogueMessageDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * User session identifier
   */
  sessionId?: string;
  actor?: DialogueActor;
  /**
   * Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.
   */
  text: string;
  /**
   * Assistant gender (M or F)
   */
  gender?: string;
  /**
   * Text language
   */
  language?: string;
  /**
   * User emotion, if available
   */
  emotion?: string;
  /**
   * LLM engine to use
   */
  llm?: Record<string, unknown>;
  /**
   * The avatar id used for interaction
   */
  avatar?: string;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type DialogueMemoryMessageDto = {
  content: string;
  role: Record<string, unknown>;
  name: string;
  ts: string;
};

export type DialogueTaskRecordDto = {
  /**
   * Record ID
   */
  recordId: string;
  /**
   * Task ID
   */
  taskId: string;
  /**
   * Application ID reference
   */
  appId: string;
  /**
   * Session ID reference
   */
  sessionId: string;
  status?: TaskEventType;
  /**
   * Stored values
   */
  values: Record<string, unknown>;
  /**
   * Updated date
   */
  updated?: string;
  /**
   * Creation date
   */
  created?: string;
};

export type DialogueToolsRepositoryDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  /**
   * Tool repository ID
   */
  repositoryId?: string;
  /**
   * Tool repository options
   */
  options?: DialogueToolsRepositoryOptionsDto;
  /**
   * Tools list
   */
  tools?: Array<unknown[]>;
};

export type SessionSearchFilter = {
  /**
   * filter query
   */
  query?: Record<string, unknown>;
  /**
   * results limit
   */
  limit?: number;
  /**
   * results to skip from beginning
   */
  skip?: number;
  /**
   * result sorting
   */
  sort?: Record<string, unknown>;
};

export type SessionProperties = {
  /**
   * Reference to the current tool repository
   */
  repositoryId?: string;
};

export type SessionDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  sessionId?: string;
  /**
   * Agent instance associated to the session
   */
  agentId?: string;
  /**
   * Collect inferred identifiers of user interacting with the agent during a session.
   */
  user?: Array<string>;
  modifiedAt: string;
  createdAt: string;
  closedAt: string;
  settings?: AppSettingsDto;
  properties?: SessionProperties;
};

export type SessionSupportRequestDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  sessionId: string;
  code: string;
  message: string;
};

export type SessionSupportResponseDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  supportId: string;
};

export type SessionStorageRecordDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  storageId?: string;
  sessionId?: string;
  data: Record<string, unknown>;
};

export type SessionStorageSearchDto = {
  appId: string;
  userId?: Array<string>;
  sessionId?: Array<string>;
  storageId?: Array<string>;
};

export type AgentStatus =
  | 'unavailable'
  | 'error'
  | 'not_ready'
  | 'ready'
  | 'loading'
  | 'interacting'
  | 'waiting'
  | 'processing';

export const AgentStatusEnum = {
  UNAVAILABLE: 'unavailable',
  ERROR: 'error',
  NOT_READY: 'not_ready',
  READY: 'ready',
  LOADING: 'loading',
  INTERACTING: 'interacting',
  WAITING: 'waiting',
  PROCESSING: 'processing',
} as const;

export type AgentHeartBeatEventDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  agentId?: string;
  moduleId: string;
  status: AgentStatus;
  settings?: AppSettingsDto;
};

export type AgentEvaluatePromptOptionsDto = {
  /**
   * Include chat history
   */
  history?: boolean;
  /**
   * Include contents from documents
   */
  documents?: boolean;
  /**
   * Include application prompt
   */
  app?: boolean;
  /**
   * Use specified avatar characterization prompt
   */
  avatar?: string;
  /**
   * Provide response as JSON
   */
  json?: boolean;
  /**
   * Response language
   */
  language?: string;
};

/**
 * LLM provider
 */
export type LLMProvider = 'ollama' | 'openai' | 'groq' | 'antrophic';

export const LLMProviderEnum = {
  OLLAMA: 'ollama',
  OPENAI: 'openai',
  GROQ: 'groq',
  ANTROPHIC: 'antrophic',
} as const;

export type AgentEvaluatePromptDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Id of the session
   */
  sessionId?: string;
  /**
   * Prompt to evaluate
   */
  prompt: string;
  /**
   * Prompt options
   */
  options?: AgentEvaluatePromptOptionsDto;
  provider?: LLMProvider;
  /**
   * LLM provider model name
   */
  model?: string;
};

/**
 * Response format (text,string)
 */
export type AgentEvaluatePromptFormat = 'text' | 'string';

export const AgentEvaluatePromptFormatEnum = {
  TEXT: 'text',
  STRING: 'string',
} as const;

export type AgentEvaluatePromptResponseDto = {
  /**
   * Result of the call
   */
  result: Record<string, unknown>;
  format: AgentEvaluatePromptFormat;
};

export type UIContentMetadataDto = {
  /**
   * Reference to a tool repository ID
   */
  repositoryId?: string;
};

export type UIContentOptionsDto = {
  /**
   * Clear the UI screen
   */
  clearScreen?: boolean;
  /**
   * Enable agent reading the content (text to speech)
   */
  ttsEnabled?: boolean;
  /**
   * Stop the agent speech
   */
  stopSpeech?: boolean;
  /**
   * Define the language of the content, it will be translated based on the language selected by the user.
   */
  language?: string;
};

export type SupportedContentTypes =
  | 'video'
  | 'image'
  | 'pdf'
  | 'webpage'
  | 'object'
  | 'text'
  | 'email'
  | 'html'
  | 'link'
  | 'dialogue-message'
  | 'navigation'
  | 'buttons'
  | 'quiz'
  | 'clear-screen'
  | 'qrcode-scanner';

export const SupportedContentTypesEnum = {
  VIDEO: 'video',
  IMAGE: 'image',
  PDF: 'pdf',
  WEBPAGE: 'webpage',
  OBJECT: 'object',
  TEXT: 'text',
  EMAIL: 'email',
  HTML: 'html',
  LINK: 'link',
  DIALOGUE_MESSAGE: 'dialogue-message',
  NAVIGATION: 'navigation',
  BUTTONS: 'buttons',
  QUIZ: 'quiz',
  CLEAR_SCREEN: 'clear-screen',
  QRCODE_SCANNER: 'qrcode-scanner',
} as const;

export type ImageContentDto = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
};

export type ImageUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: ImageContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type VideoContentDto = {
  sources: Array<string>;
  description?: string;
  subtitle?: string;
  thumb?: string;
  title?: string;
  width?: number;
  height?: number;
};

export type VideoUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: VideoContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type PdfContentDto = {
  url: string;
};

export type PdfUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: PdfContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type WebpageContentDto = {
  url: string;
};

export type WebpageUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: WebpageContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type ObjectContentDto = {
  url: string;
};

export type ObjectUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: ObjectContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type TextContentDto = {
  text: string;
};

export type TextUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: TextContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type QuizAnswerDto = {
  answer: string;
  reason: string;
  correct: boolean;
};

export type QuizContentDto = {
  question: string;
  answers: Array<QuizAnswerDto>;
};

export type QuizUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: QuizContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type ClearUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: Record<string, unknown>;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type ClearScreenDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: Record<string, unknown>;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type ButtonDto = {
  /**
   * Button value
   */
  value: string;
  id?: string;
  /**
   * Button label
   */
  label?: string;
  /**
   * Provide a description for the button
   */
  description?: string;
  classes?: Array<string>;
  options?: UIContentOptionsDto;
};

export type ButtonsContentDto = {
  label: string;
  list: Array<ButtonDto>;
};

export type ButtonsUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: ButtonsContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type DialogueMessageUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: DialogueMessageDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type LinkContentDto = {
  url: string;
  label: string;
};

export type LinkUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: LinkContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type HtmlContentDto = {
  html: string;
};

export type HtmlUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: HtmlContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type EmailContentDto = {
  email: string;
  label: string;
};

export type EmailUIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: EmailContentDto;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type UiInteractionButtonDto = {
  context: Record<string, unknown>;
  element: string;
  value: string;
};

export type UIInteractionDTO = {
  context: Record<string, unknown>;
  element: string;
  value: string;
};

export type UIContentDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: Record<string, unknown>;
  /**
   * Provide a description for the content
   */
  description?: string;
  /**
   * Provides metadata for the content
   */
  metadata?: UIContentMetadataDto & Record<string, unknown>;
  /**
   * Provides configuration options for the content
   */
  options?: UIContentOptionsDto & Record<string, unknown>;
  /**
   * Unique sortable ID used to group and sort messages
   */
  messageId?: string;
  /**
   * Unique sortable ID used to sort chunks from the same messageId
   */
  chunkId?: string;
};

export type QrCodePayloadDto = {
  version: number;
  data: string;
};

export type QrCodeDto = {
  imageDataUrl: string;
};

export type UIModelMapBlendShapesRequestDto = {
  blendShapes: Array<string>;
};

export type UIModelMapBlendShapesResponseDto = {
  blendShapes: Record<string, unknown>;
};

export type UIAssetDto = {
  id: string;
  type: RepositoryAssetTypes;
  name?: string;
  path: string;
  metadata?: RepositoryAssetMetadataDto;
  filename?: string;
  appId: string;
  userId?: string;
  ts?: string;
};

export type Buffer = {};

export type LogType =
  | 'characterization'
  | 'stt'
  | 'tts'
  | 'interaction'
  | 'session'
  | 'document'
  | 'chat'
  | 'task'
  | 'performance'
  | 'kpi'
  | 'error';

export const LogTypeEnum = {
  CHARACTERIZATION: 'characterization',
  STT: 'stt',
  TTS: 'tts',
  INTERACTION: 'interaction',
  SESSION: 'session',
  DOCUMENT: 'document',
  CHAT: 'chat',
  TASK: 'task',
  PERFORMANCE: 'performance',
  KPI: 'kpi',
  ERROR: 'error',
} as const;

export type DatasetRecordDto = {
  appId: string;
  sessionId: string;
  type?: LogType;
  label: string;
  ts: string;
  data: Record<string, unknown>;
};

export type DatasetRecordFilterDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * Track the interaction session, if available
   */
  sessionId?: string;
  types?: Array<LogType>;
};

export type MonitoringRecordDto = {
  appId: string;
  sessionId: string;
  type?: LogType;
  label: string;
  ts: string;
};

export type XRMarkerListRequestDto = {
  appId: string;
  /**
   * List of marker ID to search for
   */
  markerId?: Array<string>;
  /**
   * List of uri to search for
   */
  payload?: Array<string>;
  tags?: Array<string>;
};

export type XRMarkerDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  /**
   * ID of the marker
   */
  markerId?: string;
  /**
   * Payload as decoded from the marker QR code
   */
  payload: string;
  /**
   * A list of tags for the marker
   */
  tags?: Array<string>;
};

export type XROcclusionResponseDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  occlusion: boolean;
};

export type PositionDto = {
  x: number;
  y: number;
  z: number;
};

export type OrientationDto = {
  x: number;
  y: number;
  z: number;
  w: number;
};

export type PoseDto = {
  position: PositionDto;
  orientation: OrientationDto;
};

export type MovementDto = {
  targetPosition: PoseDto;
  personId: string;
  path: Array<string>;
};

export type MovementEventDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  movement: MovementDto;
};

export type SermasBaseDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
};

export type ActuationEventDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  actuations: Array<string>;
};

export type LinearVelocityDto = {};

export type VelocityDto = {
  linear: LinearVelocityDto;
  angular: LinearVelocityDto;
};

export type StatusDto = {
  actualPosition: PoseDto;
  velocity: VelocityDto;
};

export type StatusEventDto = {
  appId: string;
  /**
   * Reference to the authenticated client the request originated from
   */
  clientId?: string;
  /**
   * Reference to the user interacting with the system
   */
  userId?: string;
  /**
   * Reference date
   */
  ts?: string;
  status: StatusDto;
  robotId: string;
};
