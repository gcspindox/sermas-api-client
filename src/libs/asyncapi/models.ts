// generated, do not edit
import {
  PlatformAppDto,
  AppModuleConfigDto,
  ModuleSettingsDto,
  ModuleResourceDto,
  RepositoryConfigDto,
  AppClientDto,
  AppSettingsDto,
  AppPromptDto,
  ToolsRequestSchema,
  PlatformModuleConfigDto,
  PositionDto,
  UserInteractionIntentionDto,
  DialogueMessageDto,
  SessionDto,
  SessionStorageEventDto,
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

export interface AppToolsDto {
  name: string;
  description: string;
  schema?: string[];
  request?: ToolsRequestSchema;
  emitter?: string;
  returnDirect?: boolean;
  url?: string;
}

export interface AnonymousSchema_60 {
  username?: string;
  password: string;
}

export interface AnonymousSchema_63 {
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

export type AnonymousSchema_125 = 'start' | 'stop';

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

export type Buffer = Record<string, any>;

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
  status: AnonymousSchema_199;
  modules: string[];
}

export type AnonymousSchema_199 =
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
  contentType: AnonymousSchema_231;
  content: Record<string, any>;
  metadata?: Record<string, any>;
  options: Record<string, any>;
  chunkId?: number;
  messageId?: string;
}

export type AnonymousSchema_231 =
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
