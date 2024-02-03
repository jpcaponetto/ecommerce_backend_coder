import winston from "winston";
import { banderas } from "../utils.js";

const levels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  http: 4,
  debug: 5,
};

const colors = {
  fatal: "red",
  error: "yellow",
  warn: "white",
  info: "magenta",
  http: "green",
  debug: "cyan",
};

export const developerLogger = winston.createLogger({
  levels: levels,
  transports: [
    new winston.transports.Console({
      level: "debug",
      format: winston.format.combine(
        winston.format.colorize({ colors: colors }),
        winston.format.simple()
      ),
    }),
  ],
});

export const productionLogger = winston.createLogger({
  levels: levels,
  transports: [
    new winston.transports.Console({
      level: "http",
      format: winston.format.combine(
        winston.format.colorize({ colors: colors }),
        winston.format.simple()
      ),
    }),
    new winston.transports.File({
      filename: "/logs/logs.log",
      level: "info",
      format: winston.format.combine(winston.format.simple()),
    }),
  ],
});

export const middleraweLogger = (req, res, next) => {
  const loggerw = banderas.e == "prod" ? productionLogger : developerLogger;
  req.logger = loggerw;
  next();
};
