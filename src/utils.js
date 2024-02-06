import path from "path";
import url from "url";
import jwt from "jsonwebtoken";
import { env } from "./env/config.js";
import bcrypt from "bcrypt";
import { Command } from "commander";
import { factory } from "./env/environment.js";

const commands = new Command();
commands.option("-e <ambiente>", "bandera ambiente", "dev");
commands.option("-p <persistencia>", "bandera persistencia", "MONGO");
commands.parse();
export const banderas = commands.opts();

const { wenv } = factory(banderas.e);

const __filename = url.fileURLToPath(import.meta.url);
export const _dirname = path.dirname(__filename);

export const generateToken = (user) => {
  const { firstName, role, email, age, cid } = user;
  const payload = { firstName, role, email, age, cid };
  return jwt.sign(payload, wenv.mongo.jsonwebtoken.secret, {
    expiresIn: wenv.mongo.jsonwebtoken.expiresIn,
  });
};

export const validateToken = (token) => {
  return new Promise((resolve) => {
    jwt.verify(token, wenv.mongo.jsonwebtoken.secret, (error, payload) => {
      if (error) {
        return resolve(false);
      }
      resolve(payload);
    });
  });
};

export const passwordHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
