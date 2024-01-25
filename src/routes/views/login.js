import { Router } from "express";
import { outPassport } from "../../config/middlewares/outmiddlewares.js";
import userDto from "../../dto/userDto.js";

const router2 = Router();

router2.get("/login", (req, res) => {
  res.render("login");
});

router2.get("/register", (req, res) => {
  res.render("register");
});

router2.get("/profile", outPassport("jwt"), (req, res) => {
  const userData = new userDto(req.user);
  res.render("profile", userData);
});

export default router2;
