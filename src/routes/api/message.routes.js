import { Router } from "express";
import messageController from "../../controllers/message.controller.js";

const messageRouter = Router();

messageRouter.get("/messages", async (req, res, next) => {
  return await messageController.getAll();
});
