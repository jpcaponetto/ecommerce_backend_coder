import mongoose from "mongoose";
import { factory } from "../env/environment.js";
import { banderas } from "../utils.js";
import customError from "../utils/createError.js";
import { dataBaseError } from "../utils/causeError.js";
import { loggerFn } from "../config/logger.js";

export default class MongoSingleton {
  constructor() {
    const { wenv } = factory(banderas.e);
    const logger = loggerFn();
    try {
      this.connection = mongoose.connect(wenv.mongo.uri);
      customError.errorCustom({
        name: "DB Error",
        cause: dataBaseError(),
        message: "No te pudiste conectar a la base de datos",
        code: dirErrors.dataBaseError,
      });
    } catch (error) {
      logger.error("No se pudo logear");
    }
    logger.info("Database connected 👍👍👍");
  }
  static returnInstance() {
    if (!MongoSingleton.instance) {
      MongoSingleton.instance = new MongoSingleton();
    }
    return MongoSingleton.instance;
  }
}
