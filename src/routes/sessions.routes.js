import { Router } from "express";
import bcrypt from "bcrypt";
import { createCart } from "../config/class/cart.js";
import { createUser } from "../config/class/user.js";
import passport from "passport";
import { searchByEmail } from "../config/class/user.js";
import { generateToken } from "../utils.js";
import { env } from "../env/config.js";

const sessionsRouter = Router();

sessionsRouter.post("/sessions/register", async (req, res) => {
  const { body } = req;

  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(body.password, salt);
    body.password = hash;
    const cart = await createCart();
    const user = await createUser(body, cart._id);
    res.status(200).json(user);
  } catch (error) {
    res.json(error.message);
  }
});

sessionsRouter.post("/sessions/login", async (req, res) => {
  const { email, password } = req.body;
  const mail = await searchByEmail(email);
  if (mail) {
    const pw = bcrypt.compareSync(password, mail.password);
    if (pw) {
      const token = generateToken(mail);
      res.cookie("token", token, env.dev.cookie.options);
      return res.redirect("/profile");
    } else {
      res.status(401).json({ msg: "Login fail" });
      return;
    }
  }
  return;
});

sessionsRouter.get("/sessions/logout", (req, res) => {
  res.clearCookie("token");
});

sessionsRouter.get(
  "/sessions/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

sessionsRouter.get(
  "/sessions/github/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const token = generateToken(req.user);
    res.cookie("token", token, env.dev.cookie.options);
    res.redirect("/profile");
  }
);

export default sessionsRouter;
