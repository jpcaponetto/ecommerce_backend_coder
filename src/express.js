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
import productRouter from "./routes/products.routes.js";
import routerProduct from "./routes/views/renderProduct.js";

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
app.use("/api", sessionsRouter, router, productRouter);
app.use("/", router2, routerProduct);

app.get("/", (req, res) => {
  res.json({ msg: "Hola locos." });
});

export default app;
