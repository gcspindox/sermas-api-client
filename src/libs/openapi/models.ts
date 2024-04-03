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
  attributes: Record<string, unknown>;
  appId?: string;
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

export type AppSettingsDto = {
  ttsEnabled?: boolean;
  login?: boolean;
  avatar: string;
  language?: string;
  llm?: string;
  background: string;
  prompt?: AppPromptDto;
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
  name: string;
  description: string;
  schema?: Array<string>;
  request?: ToolsRequestSchema;
  emitter?: string;
  returnDirect?: boolean;
  url?: string;
};

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
  tools?: Array<AppToolsDTO>;
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
  tools?: Array<AppToolsDTO>;
};

export type PlatformAppExportFilterDto = {
  name?: string;
  appId?: Array<string>;
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
  password?: string;
  roles?: string;
  enabled?: boolean;
  authorization?: Array<AuthorizationUser>;
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

export type DialogueDocumentMetadataDto = {
  uri?: string;
  source?: string;
};

export type DialogueDocumentDto = {
  appId: string;
  documentId: string;
  content: string;
  metadata: DialogueDocumentMetadataDto;
};

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
   * User session identifier
   */
  sessionId?: string;
  /**
   * Unique identifier of the message
   */
  messageId?: string;
  /**
   * Actor providing the text, can be user or agent
   */
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
  llm?: string;
  /**
   * Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.
   */
  chunkId?: number;
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
   * User session identifier
   */
  sessionId?: string;
  /**
   * Unique identifier of the message
   */
  messageId?: string;
  /**
   * Actor providing the text, can be user or agent
   */
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
  llm?: string;
  /**
   * Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.
   */
  chunkId?: number;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  moduleId: string;
  status: AgentStatus;
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
  | 'clear-screen';

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
} as const;

export type ImageContentDto = {
  src: string;
  width?: number;
  height?: number;
  alt: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: ImageContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: VideoContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: PdfContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: WebpageContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: ObjectContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: TextContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: QuizContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
};

export type ButtonDto = {
  value: string;
  id?: string;
  label?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: ButtonsContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: DialogueMessageDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: LinkContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: HtmlContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: EmailContentDto;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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
   * Track the interaction session, if available
   */
  sessionId?: string;
  contentType: SupportedContentTypes;
  content: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  options?: UIContentOptionsDto;
  chunkId?: number;
  messageId?: string;
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

export type ViewLogsRequestDto = {
  sessionId: string;
  type?: 'speech' | 'characterization' | 'speechToText';
  ts?: string;
};

export const TypeEnum = {
  SPEECH: 'speech',
  CHARACTERIZATION: 'characterization',
  SPEECH_TO_TEXT: 'speechToText',
} as const;

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
  status: StatusDto;
  robotId: string;
};
