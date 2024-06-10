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
  RepositoryBackgroundDto,
  RepositoryBackgroundMetadataDto,
  RepositoryRobotModelDto,
  RobotMapDto,
  RepositoryDocumentDto,
  RepositoryAnimationDto,
  AppClientDto,
  AppSettingsDto,
  AppPromptDto,
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
  AgentStatus,
  SessionStorageRecordDto,
  UIAssetDto,
  UIContentDto,
  SupportedContentTypes,
  UIInteractionDTO,
  XRMarkerDto,
  ActuationEventDto,
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
  userId?: string;
  ts?: string;
}

export interface PlatformAppChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: PlatformAppDto;
}

export interface anonymous_schema_99 {
  auth?: string;
  basic?: anonymous_schema_101;
  bearer?: anonymous_schema_104;
  moduleId: string;
  url: string;
  headers?: Record<string, any>;
}

export interface anonymous_schema_101 {
  username?: string;
  password: string;
}

export interface anonymous_schema_104 {
  clientType?: string;
  clientId?: string;
  clientSecret?: string;
  username?: string;
  password?: string;
  audience?: string;
  tokenUrl: string;
  refreshUrl?: string;
}

export interface anonymous_schema_149 {
  enableTool?: boolean;
  toolOptions?: anonymous_schema_151;
  repositoryId?: string;
}

export interface anonymous_schema_151 {
  triggerOnce?: boolean;
  exclusive?: boolean;
}

export interface PlatformAppClientChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: AppClientDto;
}

export interface PlatformAppModuleConfigEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: AppModuleConfigDto;
}

export interface ModuleConfigEventDto {
  operation: Record<string, any>;
  ts: string;
  record: PlatformModuleConfigDto;
}

export interface UpdateUserEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  enabled: boolean;
}

export interface UserDetectionEventDto {
  appId: string;
  clientId?: string;
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

export type anonymous_schema_209 = 'start' | 'stop';

export interface UserCharacterizationEventDto {
  appId: string;
  clientId?: string;
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
  userId?: string;
  ts?: string;
  uri: string;
}

export interface NoiseEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  noiseType: string;
  level: string;
  speakerId: string[];
}

export interface SermasSessionDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
}

export interface DialogueTaskChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: DialogueTaskDto;
}

export interface DialogueTaskRecordChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: DialogueTaskRecordDto;
}

export interface DialogueTaskRecordHandlerDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  taskId: string;
  recordId: string;
  field: anonymous_schema_294;
}

export interface anonymous_schema_294 {
  name: string;
  label?: string;
  order?: number;
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
  userId?: string;
  ts?: string;
  sessionId?: string;
  name: string;
  tool: AppToolsDTO;
}

export interface DialogueToolsRepositoryChanged {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: DialogueToolsRepositoryRecordDto;
}

export interface DialogueToolsRepositoryRecordDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  repositoryId?: string;
  options?: anonymous_schema_313;
  tools: any[][];
}

export interface anonymous_schema_313 {
  triggerOnce?: boolean;
  exclusive?: boolean;
}

export interface SessionChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: SessionDto;
}

export interface SessionSupportEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  supportId: string;
  status: string;
  feedback: string;
  code: string;
}

export interface AgentDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  agentId: string;
  status: AgentStatus;
  modules: string[];
}

export interface AgentChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  moduleId: string;
  record: AgentDto;
}

export interface SessionStorageEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: SessionStorageRecordDto;
}

export interface UIAssetChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: UIAssetDto;
}

export interface anonymous_schema_388 {
  repositoryId?: string;
  additionalProperties?: Record<string, any>;
}

export interface anonymous_schema_391 {
  clearScreen?: boolean;
  ttsEnabled?: boolean;
  stopSpeech?: boolean;
  additionalProperties?: Record<string, any>;
}

export interface UIInteractionEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  moduleId: string;
  interaction: UIInteractionDTO;
}

export interface XRMarkerChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: XRMarkerDto;
}

export interface XROcclusionDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  occlusion: boolean;
}

export interface InitialPoseEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  initialPose: InitialPoseDto;
}

export interface InitialPoseDto {
  pose: PoseDto;
  covariance: string[];
}
