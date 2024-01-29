import { Router } from "express";
import { generateToken } from "../../utils.js";
import bcrypt from "bcrypt";
import userController from "../../controllers/user.controllers.js";
import { env } from "../../env/config.js";
import passport from "passport";

const userRouter = Router();

userRouter.post("/session/out/register", async (req, res, next) => {
  const { body } = req;
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashpw = bcrypt.hashSync(body.password, salt);
    body.password = hashpw;
    await userController.createProduct(body);
    res.redirect("/login");
  } catch (error) {
    next(error);
  }
});

userRouter.post("/session/out/login", async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userController.findUserByEmail(email);
  if (!user) {
    return res
      .status(401)
      .json({ msg: "unauthorized: User o Contraseña incorrectos ❌" });
  }
  const pw = bcrypt.compareSync(password, user.password);
  if (pw) {
    const token = generateToken(user);
    res.cookie("token", token, env.dev.cookie.options);
    return res.json(token);
    res.redirect("/profile");
  }
});

userRouter.get("/session/out/logout", async (req, res, next) => {
  res.clearCookie("token");
  res.redirect("/login");
});

userRouter.get("/github/auth/login", passport.authenticate("github"));

userRouter.get(
  "/github/auth/callback",
  passport.authenticate("github", {
    session: false,
    failureRedirect: "/login",
  }),
  (req, res) => {
    const token = generateToken(user);
    res.cookie("token", token, env.dev.cookie.options);
    res.redirect("/profile");
  }
);

export default userRouter;
