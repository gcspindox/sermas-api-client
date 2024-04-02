// generated, do not edit
import {
  PlatformAppDto,
  AppModuleConfigDto,
  ModuleSettingsDto,
  ModuleResourceDto,
  RepositoryConfigDto,
  RepositoryAvatarModelDto,
  AvatarCameraConfig,
  Point3D,
  RepositoryBackgroundModelDto,
  RepositoryBackgroundMetadataDto,
  RepositoryRobotModelDto,
  RepositoryMapModelDto,
  AppClientDto,
  AppSettingsDto,
  AppPromptDto,
  AppToolsDTO,
  ToolsRequestSchema,
  PlatformModuleConfigDto,
  PositionDto,
  UserInteractionIntentionDto,
  DialogueMessageDto,
  Buffer,
  SessionDto,
  SessionStorageRecordDto,
  UIAssetDto,
  UIContentDto,
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
}

export interface PlatformAppChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  record: PlatformAppDto;
}

export type anonymous_schema_36 = 'readyplayerme' | 'custom';

export type anonymous_schema_39 = 'M' | 'F';

export interface anonymous_schema_77 {
  username?: string;
  password: string;
}

export interface anonymous_schema_80 {
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

export type anonymous_schema_142 = 'start' | 'stop';

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
  ts?: string;
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

export interface QRCodeEventDto {
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

export type anonymous_schema_191 = 'user' | 'agent';

export interface SermasSessionDto {
  appId: string;
  clientId?: string;
  userId?: string;
  sessionId?: string;
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
  status: anonymous_schema_220;
  modules: string[];
}

export type anonymous_schema_220 =
  | 'unavailable'
  | 'error'
  | 'not_ready'
  | 'ready'
  | 'loading'
  | 'interacting'
  | 'waiting'
  | 'processing';

export interface AgentChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  moduleId: string;
  sessionId: string;
  record: AgentDto;
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

export interface SessionStorageEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  record: SessionStorageRecordDto;
}

export interface UIAssetChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  record: UIAssetDto;
}

export type anonymous_schema_252 =
  | 'models'
  | 'backgrounds'
  | 'animations'
  | 'documents';

export type anonymous_schema_259 =
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

export interface UIInteractionEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  sessionId?: string;
  moduleId: string;
  interaction: UIInteractionDTO;
}

export interface XRMarkerChangedDto {
  appId: string;
  clientId?: string;
  userId?: string;
  operation: string;
  record: XRMarkerDto;
}

export interface XROcclusionDto {
  appId: string;
  clientId?: string;
  userId?: string;
  occlusion: boolean;
}

export interface InitialPoseEventDto {
  appId: string;
  clientId?: string;
  userId?: string;
  initialPose: InitialPoseDto;
}

export interface InitialPoseDto {
  pose: PoseDto;
  covariance: string[];
}
