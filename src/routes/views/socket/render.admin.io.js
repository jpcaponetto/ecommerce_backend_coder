import { Router } from "express";
import {
  authWitPassport,
  outPassport,
} from "../../../config/middlewares/outmiddlewares.js";

const adminRouter = Router();

adminRouter.get(
  "/admin",
  outPassport("jwt"),
  authWitPassport(["admin"]),
  (req, res) => {
    res.render("admin", req.user);
  }
);

export default adminRouter;
