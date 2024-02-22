import winston from 'winston';
import { LogLevel, LoggerService } from './logger.dto';

let defaultLogger: LoggerService;

export const setDefaultLogger = (logger: LoggerService) => {
  defaultLogger = logger;
};

const createWinstonLogger = (name = 'logger') =>
  winston.createLogger({
    level: process.env.LOG_LEVEL || 'debug',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.label({
        label: name,
      }),
      winston.format.colorize(),
      winston.format.simple(),
      winston.format.printf(({ level, message, label, timestamp }) => {
        return `${timestamp} [${label}] ${level}: ${message}`;
      }),
    ),
    transports: [new winston.transports.Console()],
  });

export class Logger implements LoggerService {
  private readonly logger;
  constructor(name: string) {
    this.logger = defaultLogger ? defaultLogger : createWinstonLogger(name);
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
