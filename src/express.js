import express from "express";
import expresshandlebars from "express-handlebars";
import passport from "passport";
import cookieParser from "cookie-parser";
import { env } from "./env/config.js";
import path from "path";
import { _dirname } from "./utils.js";
import { initPassport } from "./config/passport/passport.config.js";
import router from "./routes/test.router.js";
import sessionsRouter from "./routes/sessions.routes.js";
import router2 from "./routes/views/login.js";
import routerProduct from "./routes/views/renderProduct.js";
import productRouterApi from "./routes/api/product.routes.js";
import cartRouter from "./routes/api/cart.routes.js";
import userRouter from "./routes/api/user.routes.js";
import socketRouter from "./routes/views/socket/render.io.js";
import adminRouter from "./routes/views/socket/render.admin.io.js";
import twilioRouter from "./routes/api/twilio.routes.js";

const app = express();

app.use(cookieParser(env.dev.cookie.secret));
app.use(express.json()); // para que entienda un json pero en el body

app.use(express.urlencoded({ extended: true })); // para poder enviar datos desde la ruta

app.use(express.static(path.join(_dirname, "../public")));

app.engine("handlebars", expresshandlebars.engine());
app.set("views", path.join(_dirname, "views"));
app.set("view engine", "handlebars");

initPassport();
app.use(passport.initialize());
app.use(
  "/api",
  sessionsRouter,
  router,
  productRouterApi,
  cartRouter,
  userRouter,
  twilioRouter
);
app.use("/", router2, routerProduct, socketRouter, adminRouter);

app.get("/", (req, res) => {
  res.render("login");
});

app.get((error, req, res, next) => {
  res.status(error.code || 500).json({ error: error.message });
});

export default app;
