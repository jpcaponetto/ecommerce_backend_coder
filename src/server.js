import http from "http";
import app from "./express.js";
import { env } from "./env/config.js";
import { initMongo } from "./db/mongo.js";

await initMongo();

const httpServer = http.createServer(app);
httpServer.listen(env.dev.api.PORT, () => {
  console.log(`${env.dev.api.host}:${env.dev.api.PORT}`);
});
