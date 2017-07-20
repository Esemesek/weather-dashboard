import { Logger, transports } from 'winston';

const loggerInstance = new Logger({
  transports: [
    new transports.Console({
      timestamp: true,
      colorize: true,
      prettyPrint: true,
    }),
  ],
});

export default loggerInstance;
