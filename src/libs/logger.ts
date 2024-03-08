import { LogLevel, LoggerService } from './logger.dto';

let defaultLogger: LoggerService;

export const setDefaultLogger = (logger: LoggerService) => {
  defaultLogger = logger;
};

const createDefaultLogger = (name = 'logger') : LoggerService => (new class {
  
  format(message: any) {
    return `[${name}] ${message}`
  }
  debug(message: any, ...optionalParams: any[]) {
    console.debug(this.format(message));
  }
  error(message: any, ...optionalParams: any[]) {
    console.error(this.format(message));
  }
  fatal(message: any, ...optionalParams: any[]) {
    console.error(this.format(message));
  }
  log(message: any, ...optionalParams: any[]) {
    console.info(this.format(message));
  }
  setLogLevels(levels: LogLevel[]) {
    //
  }
  verbose(message: any, ...optionalParams: any[]) {
    console.debug(this.format(message));
  }
  warn(message: any, ...optionalParams: any[]) {
    console.warn(this.format(message));
  }
})

export class Logger implements LoggerService {
  private readonly logger;
  constructor(name: string) {
    this.logger = defaultLogger ? defaultLogger : createDefaultLogger(name);
  }
  debug(message: any, ...optionalParams: any[]) {
    this.logger.debug(message);
  }
  error(message: any, ...optionalParams: any[]) {
    this.logger.error(message);
  }
  fatal(message: any, ...optionalParams: any[]) {
    this.logger.error(message);
  }
  log(message: any, ...optionalParams: any[]) {
    (this.logger.info || this.logger.log).apply(this.logger, [message]);
  }
  setLogLevels(levels: LogLevel[]) {
    //
  }
  verbose(message: any, ...optionalParams: any[]) {
    this.logger.verbose(message);
  }
  warn(message: any, ...optionalParams: any[]) {
    this.logger.warn(message);
  }
}
