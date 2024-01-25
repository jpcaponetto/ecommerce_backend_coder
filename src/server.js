import http from "http";
import app from "./express.js";
import { env } from "./env/config.js";
import { banderas } from "./utils.js";
import MongoSingleton from "./db/mongoSingleton.js";
import { factory } from "./env/environment.js";
import { serverSocket } from "./socket.js";

const modo = banderas.e;
const persistencia = banderas.p;

if (persistencia === "MONGO") {
  await MongoSingleton.returnInstance();
}

const { wenv } = factory(modo);

const httpServer = http.createServer(app);
serverSocket(httpServer);
httpServer.listen(wenv.api.port, () => {
  console.log(`${wenv.api.host}:${wenv.api.port}`);
});
