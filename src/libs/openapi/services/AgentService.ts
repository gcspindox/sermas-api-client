import type {
  ActuationEventDto,
  MovementEventDto,
  SermasBaseDto,
  StatusEventDto,
} from '../models';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type TDataRoboticsAgentControllerMoveToArea = {
  appId: string;
  room: string;
};
export type TDataRoboticsAgentControllerStatusDescription = {
  appId: string;
  robotId: string;
};
export type TDataRoboticsAgentControllerMove = {
  requestBody: MovementEventDto;
};
export type TDataRoboticsAgentControllerInitialPose = {
  requestBody: SermasBaseDto;
};
export type TDataRoboticsAgentControllerActuate = {
  requestBody: ActuationEventDto;
};
export type TDataRoboticsAgentControllerStatus = {
  requestBody: StatusEventDto;
};

export class AgentService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * move the robot to a specified coordinates. Based on the parameter coordinates, move the robot to that coordinates.
   * @returns any
   * @throws ApiError
   */
  public roboticsAgentControllerMoveToArea(
    data: TDataRoboticsAgentControllerMoveToArea,
  ): CancelablePromise<any> {
    const { appId, room } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/robotics/agent/move/{appId}/{room}',
      path: {
        appId,
        room,
      },
    });
  }

  /**
   * get the status of the robot
   * @returns any
   * @throws ApiError
   */
  public roboticsAgentControllerStatusDescription(
    data: TDataRoboticsAgentControllerStatusDescription,
  ): CancelablePromise<any> {
    const { appId, robotId } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/robotics/agent/status/{appId}/{robotId}',
      path: {
        appId,
        robotId,
      },
    });
  }

  /**
   * relocate the robot
   * @returns any
   * @throws ApiError
   */
  public roboticsAgentControllerMove(
    data: TDataRoboticsAgentControllerMove,
  ): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/robotics/agent/relocate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * set initial pose of the robot
   * @returns any
   * @throws ApiError
   */
  public roboticsAgentControllerInitialPose(
    data: TDataRoboticsAgentControllerInitialPose,
  ): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/robotics/agent/initialpose',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * execute an action on the robot
   * @returns any
   * @throws ApiError
   */
  public roboticsAgentControllerActuate(
    data: TDataRoboticsAgentControllerActuate,
  ): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/robotics/agent/actuate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * get the status of the robot
   * @returns any
   * @throws ApiError
   */
  public roboticsAgentControllerStatus(
    data: TDataRoboticsAgentControllerStatus,
  ): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/robotics/agent/status',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
