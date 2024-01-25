import mongoose from "mongoose";
import { factory } from "../env/environment.js";
import { banderas } from "../utils.js";

export default class MongoSingleton {
  constructor() {
    const { wenv } = factory(banderas.e);
    this.connection = mongoose.connect(wenv.mongo.uri);
    console.log("database connected 👍👍👍");
  }
  static returnInstance() {
    if (!MongoSingleton.instance) {
      MongoSingleton.instance = new MongoSingleton();
    }
    return MongoSingleton.instance;
  }
}
