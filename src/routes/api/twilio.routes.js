import { Router } from "express";
import twilioServices from "../../services/twilio.services.js";

const twilioRouter = new Router();

twilioRouter.get("/twilio", (req, res, next) => {
  let twilioSrvices = new twilioServices(
    process.env.ACOUNTSID,
    process.env.AUTHTOKEN
  );
  twilioSrvices.sendmessage("+543816087263", "holaaaa");
  res.end();
});

export default twilioRouter;
