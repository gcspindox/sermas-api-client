// generated, do not edit

import { Broker } from '../broker';

import { Platform } from './platform';
import { Auth } from './auth';
import { Module } from './module';
import { Detection } from './detection';
import { Dialogue } from './dialogue';
import { Ui } from './ui';
import { Session } from './session';
import { Xr } from './xr';
import { Robotics } from './robotics';

export default class AsyncApiClient {
  public readonly platform: Platform;
  public readonly auth: Auth;
  public readonly module: Module;
  public readonly detection: Detection;
  public readonly dialogue: Dialogue;
  public readonly ui: Ui;
  public readonly session: Session;
  public readonly xr: Xr;
  public readonly robotics: Robotics;

  constructor(private readonly broker: Broker) {
    this.platform = new Platform(broker);
    this.auth = new Auth(broker);
    this.module = new Module(broker);
    this.detection = new Detection(broker);
    this.dialogue = new Dialogue(broker);
    this.ui = new Ui(broker);
    this.session = new Session(broker);
    this.xr = new Xr(broker);
    this.robotics = new Robotics(broker);
  }
}
