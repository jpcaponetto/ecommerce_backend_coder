import { Router } from "express";
import passport from "passport";
import { generateToken } from "../utils.js";
import { env } from "../env/config.js";
import {
  authWitPassport,
  outPassport,
} from "../config/middlewares/outmiddlewares.js";

const router = Router();

router.get(
  "/profile",
  outPassport("jwt"),
  authWitPassport(["A", "B"]),
  (req, res) => {
    res.render("home");
  }
);

router.get("/login", (req, res) => {
  const payload = { name: "nombre_example", role: "C" };
  const token = generateToken(payload);
  res.cookie("token", token, env.dev.cookie.options).json({ msg: true });
});

export default router;
