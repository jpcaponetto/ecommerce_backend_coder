import { ExtractJwt } from "passport-jwt";
import { env } from "../../env/config.js";

const cookieExtract = (req) => {
  let token = null;
  if (req && req.signedCookies) {
    token = req.signedCookies.token;
  }
  return token;
};

export const jwtOptions = {
  secretOrKey: env.dev.jsonwebtoken.secret,
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtract]),
};
