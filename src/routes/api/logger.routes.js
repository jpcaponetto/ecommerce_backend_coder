import { Router } from "express";

const routerLogger = Router();

routerLogger.get("/testlogger", (req, res, next) => {
  req.logger.fatal("fatal");
  req.logger.error("error");
  req.logger.warn("warn");
  req.logger.info("info");
  req.logger.http("http");
  req.logger.debug("debug");
  res.status(200).json({ ok: true });
});

export default routerLogger;
