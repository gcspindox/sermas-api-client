// generated, do not edit

export interface PlatformTokenDto {
  appId: string;
  clientId?: string;
  userId?: string;
}

export interface PlatformAppChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  record: PlatformAppDto;
}

export interface PlatformAppDto {
  appId: string;
  public?: boolean;
  name: string;
  description: string;
  ownerId: string;
  modules: AppModuleConfigDto[];
  repository: RepositoryConfigDto;
  clients: AppClientDto[];
  settings?: AppSettingsDto;
  createdAt?: string;
  updatedAt?: string;
  tools?: AppToolsDto[];
}

export interface AppModuleConfigDto {
  moduleId: string;
  status?: string;
  name?: string;
  description?: string;
  supports: string[];
  config: ModuleSettingsDto;
  secret?: string;
  appId?: string;
}

export interface ModuleSettingsDto {
  url?: string;
  openapiSpec: string;
  asyncapiSpec: string;
  resources: ModuleResourceDto[];
}

export interface ModuleResourceDto {
  resource: string;
  scope: string;
  context?: string[];
  name?: string;
  description?: string;
  moduleId: string;
  operationId: string;
  emitEvent?: boolean;
}

export interface RepositoryConfigDto {
  avatars: Record<string, any>;
  backgrounds: Record<string, any>;
  robots?: Record<string, any>;
}

export interface AppClientDto {
  appId?: string;
  name: string;
  clientId?: string;
  secret?: string;
  permissions: string[];
}

export interface AppSettingsDto {
  login: boolean;
  avatar: string;
  language: string;
  llm: string;
  background: string;
  prompt?: AppPromptDto;
}

export interface AppPromptDto {
  text: string;
}

export interface AppToolsDto {
  name: string;
  description: string;
  schema?: string[];
  request?: ToolsRequestSchema;
  emitter?: string;
  returnDirect?: boolean;
  url?: string;
}

export interface ToolsRequestSchema {
  auth?: string;
  basic?: AnonymousSchema_59;
  bearer?: AnonymousSchema_62;
  moduleId: string;
  url: string;
  headers?: Record<string, any>;
}

export interface AnonymousSchema_59 {
  username?: string;
  password: string;
}

export interface AnonymousSchema_62 {
  clientType?: string;
  clientId?: string;
  clientSecret?: string;
  username?: string;
  password?: string;
  audience?: string;
  tokenUrl: string;
  refreshUrl?: string;
}

export interface PlatformAppClientChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  record: AppClientDto;
}

export interface PlatformAppModuleConfigEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  record: AppModuleConfigDto;
}

export interface ModuleConfigEventDto {
  operation: Record<string, any>;
  ts: string;
  record: PlatformModuleConfigDto;
}

export interface PlatformModuleConfigDto {
  moduleId: string;
  status?: string;
  name?: string;
  description?: string;
  supports: string[];
  config: ModuleSettingsDto;
  secret?: string;
}

export interface UpdateUserEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  enabled: boolean;
}

export interface UserDetectionEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  cameraId: string;
  source: string;
  detections: UserDetectionDto[];
}

export interface UserDetectionDto {
  skeleton: string[];
  face: BoundingBox;
  faceMask: string[];
  fullBody: BoundingBox;
  user: StringInferenceValue[];
  position: PositionDto;
}

export interface BoundingBox {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface StringInferenceValue {
  probability: number;
  value: string;
}

export interface PositionDto {
  x: number;
  y: number;
  z: number;
}

export interface UserInteractionIntentionDto {
  appId: string;
  clientId?: string;
  userId?: string;
  moduleId: string;
  source: string;
  probability: number;
  interactionType: AnonymousSchema_124;
  sessionId: string;
}

export enum AnonymousSchema_124 {
  START = 'start',
  STOP = 'stop',
}

export interface UserCharacterizationEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  source: string;
  detections: UserCharacterizationDto[];
  sessionId?: string;
}

export interface UserCharacterizationDto {
  emotion: UserEmotionValue;
  age?: UserAgeValue;
  user?: StringInferenceValue[];
}

export interface UserEmotionValue {
  probability: number;
  value: string;
}

export interface UserAgeValue {
  probability: number;
  value: number;
}

export interface AudioClassificationEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  source: string;
  detections: AudioClassificationValue[];
  sessionId?: string;
}

export interface AudioClassificationValue {
  probability: number;
  value: string;
}

export interface ObjectDetectionEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  detections: ObjectDetectionDto[];
}

export interface ObjectDetectionDto {
  probability: number;
  value: string;
}

export interface QrCodeEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  uri: string;
}

export interface NoiseEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  noiseType: string;
  level: string;
  speakerId: string[];
}

export interface DialogueToolTriggeredEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  sessionId?: string;
  name: string;
}

export interface DialogueMessageDto {
  appId: string;
  clientId?: string;
  userId?: string;
  sessionId?: string;
  messageId?: string;
  actor: string;
  text: string;
  gender: string;
  language: string;
  emotion?: Record<string, any>;
  llm?: string;
  chunkId?: number;
}

export type Buffer = Record<string, any>;

export interface SessionDto {
  appId: string;
  clientId?: string;
  userId?: string;
  sessionId?: string;
  agentId?: string;
  user?: string[];
  modifiedAt: string;
  createdAt: string;
  closedAt: string;
}

export interface SessionChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  record: SessionDto;
}

export interface AgentDto {
  appId: string;
  clientId?: string;
  userId?: string;
  agentId: string;
  status: AnonymousSchema_197;
  modules: string[];
}

export enum AnonymousSchema_197 {
  UNAVAILABLE = 'unavailable',
  ERROR = 'error',
  NOT_READY = 'not_ready',
  READY = 'ready',
  LOADING = 'loading',
  INTERACTING = 'interacting',
  WAITING = 'waiting',
  PROCESSING = 'processing',
}

export interface AgentChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  moduleId: string;
  sessionId: string;
  record: AgentDto;
}

export interface SessionStorageEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  sessionId: string;
  data: Record<string, any>;
  storageId: string;
}

export interface SessionSupportEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  supportId: string;
  status: string;
  feedback: string;
  code: string;
}

export interface UiStatusDto {
  appId: string;
  clientId?: string;
  userId?: string;
  assetId: string;
  status: string;
  visible: boolean;
}

export interface UiContentDto {
  appId: string;
  clientId?: string;
  userId?: string;
  sessionId?: string;
  contentType: string;
  content: Record<string, any>;
  metadata: Record<string, any>;
  options: Record<string, any>;
  chunkId?: number;
  messageId?: string;
}

export interface UiInteractionEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  sessionId?: string;
  moduleId: string;
  interaction: UiInteractionDto;
}

export interface UiInteractionDto {
  context: Record<string, any>;
  element: string;
  value: string;
}

export interface XrMarkerDetectedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  markerId?: string;
  uri: string;
  tags: string[];
  marker: XrMarkerDto;
}

export interface XrMarkerDto {
  appId: string;
  clientId?: string;
  userId?: string;
  markerId?: string;
  uri: string;
  tags: string[];
}

export interface XrOcclusionDto {
  appId: string;
  clientId?: string;
  userId?: string;
  occlusion: boolean;
}

export interface ActuationEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  actuations: string[];
}

export interface MovementEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  movement: MovementDto;
}

export interface MovementDto {
  targetPosition: Record<string, any>;
  personId: string;
  path: string[];
}

export interface StatusEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  status: StatusDto;
  robotId: string;
}

export interface StatusDto {
  actualPosition: Record<string, any>;
  velocity: VelocityDto;
}

export interface VelocityDto {
  linear: Record<string, any>;
  angular: Record<string, any>;
}

export interface InitialPoseEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  initialPose: InitialPoseDto;
}

export interface InitialPoseDto {
  pose: Record<string, any>;
  covariance: string[];
}
