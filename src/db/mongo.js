import mongoose from "mongoose";
import { env } from "../env/config.js";

export const initMongo = async () => {
  try {
    await mongoose.connect(env.dev.mongo.URI);
    console.log("Me conecté a la base de dato 👍👍👍👍");
  } catch (error) {
    console.log(error.message);
  }
};
