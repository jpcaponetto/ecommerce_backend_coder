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
import routerMocks from "./routes/api/mocks.products.routes.js";
import { errorHandlers } from "./config/handlers/errorHandlers.js";
import { middleraweLogger } from "./config/logger.js";
import routerLogger from "./routes/api/logger.routes.js";
import testRouter from "./routes/api/test.routes.js";
import nodeMailerRouter from "./routes/api/nodemailer.routes.js";

const app = express();
app.use(middleraweLogger);
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
  twilioRouter,
  routerMocks,
  routerLogger,
  testRouter,
  nodeMailerRouter
);
app.use("/", router2, routerProduct, socketRouter, adminRouter);

app.get("/", (req, res) => {
  res.render("login");
});

// app.use((err, req, res, next) => {
//   res.status(500).json(err);
// });
app.use(errorHandlers);

export default app;
