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
  ToolsRequestSchema,
  PlatformModuleConfigDto,
  PositionDto,
  UserInteractionIntentionDto,
  DialogueMessageDto,
  DialogueActor,
  Buffer,
  SessionDto,
  AgentStatus,
  SessionStorageRecordDto,
  UIAssetDto,
  UIContentDto,
  SupportedContentTypes,
  UIContentOptionsDto,
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

export interface anonymous_schema_100 {
  username?: string;
  password: string;
}

export interface anonymous_schema_103 {
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

export type anonymous_schema_172 = 'start' | 'stop';

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

export interface DialogueToolTriggeredEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
  name: string;
  tool: AppToolsDTO;
}

export interface DialogueToolsChanged {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  operation: string;
  sessionId?: string;
  record: AppToolsDTO[];
}

export interface SermasSessionDto {
  appId: string;
  clientId?: string;
  userId?: string;
  ts?: string;
  sessionId?: string;
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
