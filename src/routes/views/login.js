import { Router } from "express";
import { outPassport } from "../../config/middlewares/outmiddlewares.js";

const router2 = Router();

router2.get("/login", (req, res) => {
  res.render("login");
});

router2.get("/register", (req, res) => {
  res.render("register");
});

router2.get("/profile", outPassport("jwt"), (req, res) => {
  console.log(req.user);
  res.render("profile", req.user);
});

export default router2;
