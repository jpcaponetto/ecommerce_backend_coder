import { Router } from "express";
import { outPassport } from "../../../config/middlewares/outmiddlewares.js";
const socketRouter = new Router();

socketRouter.get("/io", outPassport("jwt"), (req, res, next) => {
  res.render("chat", req.user);
});

export default socketRouter;
