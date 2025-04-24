// generated, do not edit
import {
  PlatformAppDto,
  AppModuleConfigDto,
  ModuleSettingsDto,
  ModuleResourceDto,
  RepositoryConfigDto,
  RepositoryAvatarDto,
  RepositoryAssetTypes,
  ModelType,
  ModelGender,
  AvatarCameraConfig,
  Point3D,
  AvatarTTSOptions,
  RepositoryBackgroundDto,
  RepositoryBackgroundMetadataDto,
  RepositoryRobotModelDto,
  RobotMapDto,
  RepositoryDocumentDto,
  RepositoryAnimationDto,
  AppClientDto,
  AppSettingsDto,
  InteractionStartTypes,
  AppToolsDTO,
  ToolsParameterSchema,
  ToolsParameterSchemaTypes,
  DialogueTaskDto,
  TaskIntentDto,
  TaskEventDto,
  TaskEventType,
  TaskEventTriggerDto,
  TaskFieldDto,
  TaskSchemaDataType,
  OptionSelection,
  PlatformModuleConfigDto,
  PositionDto,
  UserInteractionIntentionDto,
  DialogueMessageDto,
  DialogueActor,
  Buffer,
  DialogueTaskRecordDto,
  SessionDto,
  SessionProperties,
  SessionStorageRecordDto,
  AgentStatus,
  UIAssetDto,
  UIContentDto,
  SupportedContentTypes,
  UIInteractionDTO,
  MonitoringRecordDto,
  LogType,
  XRMarkerDto,
  ActuationEventDto,
  ActuationDto,
  MovementEventDto,
  MovementDto,
  PoseDto,
  OrientationDto,
  StatusEventDto,
  StatusDto,
  VelocityDto,
} from '../openapi';

export interface PlatformTokenDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
}

export interface PlatformAppChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: PlatformAppDto;
}

export interface anonymous_schema_88 {
  text: string;
}

export interface anonymous_schema_107 {
  auth?: string;
  basic?: anonymous_schema_109;
  bearer?: anonymous_schema_112;
  moduleId: string;
  url: string;
  headers?: Record<string, any>;
}

export interface anonymous_schema_109 {
  username?: string;
  password: string;
}

export interface anonymous_schema_112 {
  clientType?: string;
  clientId?: string;
  clientSecret?: string;
  username?: string;
  password?: string;
  audience?: string;
  tokenUrl: string;
  refreshUrl?: string;
}

export interface anonymous_schema_152 {
  clearScreen?: boolean;
  ttsEnabled?: boolean;
  stopSpeech?: boolean;
  language?: string;
}

export interface anonymous_schema_169 {
  triggerOnce?: boolean;
  removeRecord?: boolean;
  enableTool?: boolean;
  toolOptions?: anonymous_schema_173;
  repositoryId?: string;
  list?: boolean;
  oncePerSession?: boolean;
  matchOrRemove?: boolean;
}

export interface anonymous_schema_173 {
  triggerOnce?: boolean;
  exclusive?: boolean;
}

export interface PlatformAppClientChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: AppClientDto;
}

export interface PlatformAppModuleConfigEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: AppModuleConfigDto;
}

export interface UpdateUserEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  enabled: boolean;
}

export interface ModuleConfigEventDto {
  operation: Record<string, any>;
  ts: string;
  record: PlatformModuleConfigDto;
}

export interface UserDetectionEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
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

export type anonymous_schema_240 = 'start' | 'stop';

export interface UserCharacterizationEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
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
  requestId?: string;
  userId?: string;
  ts?: string;
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
  requestId?: string;
  userId?: string;
  ts?: string;
  detections: ObjectDetectionDto[];
}

export interface ObjectDetectionDto {
  probability: number;
  value: string;
  bbox: BoundingBox;
}

export interface QRCodeEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  version: string;
  payload: string;
  sessionId?: string;
}

export interface NoiseEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  noiseType: string;
  level: string;
  speakerId: string[];
}

export interface DialogueAvatarSpeechControlDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  chunkId?: string;
}

export interface DialogueSpeechToTextDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  actor?: DialogueActor;
  text: string;
  gender?: string;
  language?: string;
  emotion?: string;
  llm?: Record<string, any>;
  avatar?: string;
  messageId?: string;
  chunkId?: string;
  ttsEnabled?: boolean;
  isWelcome?: boolean;
}

export interface DialogueSessionRequestDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  status: DialogueSessionRequestStatus;
}

export type DialogueSessionRequestStatus =
  | 'started'
  | 'processing'
  | 'ended'
  | 'cancelled';

export interface DialogueTaskChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: DialogueTaskDto;
}

export interface DialogueTaskProgressDto {
  type: TaskEventType;
  task: anonymous_schema_342;
  record: anonymous_schema_343;
}

export interface anonymous_schema_342 {
  taskId: string;
  appId: string;
  hint?: string;
  sessionId?: string;
  name: string;
  label: string;
  description?: string;
  intents?: TaskIntentDto[];
  events?: TaskEventDto[];
  fields: TaskFieldDto[];
  options?: anonymous_schema_169;
}

export interface anonymous_schema_343 {
  recordId: string;
  taskId: string;
  appId: string;
  sessionId: string;
  status?: TaskEventType;
  values: Record<string, any>;
  updated?: string;
  created?: string;
}

export interface DialogueTaskRecordChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: DialogueTaskRecordDto;
}

export interface DialogueTaskRecordHandlerDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  taskId: string;
  recordId: string;
  field: anonymous_schema_366;
}

export interface anonymous_schema_366 {
  name: string;
  label?: string;
  hint?: string;
  order?: number;
  uiOptions?: anonymous_schema_152;
  skipResponse?: boolean;
  type: TaskSchemaDataType;
  required?: boolean;
  validation?: string;
  condition?: string;
  prompt?: string;
  handler?: string;
  multiple?: boolean;
  options?: OptionSelection[];
}

export interface DialogueToolTriggeredEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  name: string;
  tool: AppToolsDTO;
}

export interface DialogueToolsRepositoryChanged {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: DialogueToolsRepositoryRecordDto;
}

export interface DialogueToolsRepositoryRecordDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  repositoryId?: string;
  options?: anonymous_schema_388;
  tools?: any[][];
}

export interface anonymous_schema_388 {
  triggerOnce?: boolean;
  exclusive?: boolean;
}

export interface DialogueToolNotMatchingEventDto {
  appId: string;
  sessionId: string;
  tools: AppToolsDTO[];
  repositories: string[];
  taskId?: string;
  currentField?: TaskFieldDto;
}

export interface SessionChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: SessionDto;
}

export interface SessionSupportEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  supportId: string;
  status: string;
  feedback: string;
  code: string;
}

export interface SessionStorageEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: SessionStorageRecordDto;
}

export interface AgentDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  agentId: string;
  status: AgentStatus;
  modules: string[];
}

export interface AgentChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  moduleId: string;
  record: AgentDto;
  settings?: AppSettingsDto;
}

export interface UIAssetChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: UIAssetDto;
}

export interface anonymous_schema_479 {
  repositoryId?: string;
  chunks?: Record<string, any>[];
  additionalProperties?: Record<string, any>;
}

export interface anonymous_schema_484 {
  clearScreen?: boolean;
  ttsEnabled?: boolean;
  stopSpeech?: boolean;
  language?: string;
  additionalProperties?: Record<string, any>;
}

export interface UIInteractionEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  moduleId: string;
  interaction: UIInteractionDTO;
}

export interface XRMarkerChangedDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: XRMarkerDto;
}

export interface XROcclusionDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  occlusion: boolean;
}

export interface InitialPoseEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  initialPose: InitialPoseDto;
}

export interface InitialPoseDto {
  pose: PoseDto;
  covariance: string[];
}

export interface OperationalStateEventDto {
  appId: string;
  clientId?: string;
  requestId?: string;
  userId?: string;
  ts?: string;
  state: OperationalStateDto;
}

export interface OperationalStateDto {
  op: string;
  state: string;
}
