import path from "path";
import url from "url";
import jwt from "jsonwebtoken";
import { env } from "./env/config.js";
import bcrypt from "bcrypt";

const __filename = url.fileURLToPath(import.meta.url);
export const _dirname = path.dirname(__filename);

export const generateToken = (user) => {
  const { firstName, role, email, age, cid } = user;
  const payload = { firstName, role, email, age, cid };
  return jwt.sign(payload, env.dev.jsonwebtoken.secret, {
    expiresIn: env.dev.jsonwebtoken.expiresIn,
  });
};

export const validateToken = (token) => {
  return new Promise((resolve) => {
    jwt.verify(token, env.dev.jsonwebtoken.secret, (error, payload) => {
      if (error) {
        return resolve(false);
      }
      console.log("payload", payload);
      resolve(payload);
    });
  });
};

export const passwordHash = (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
};
