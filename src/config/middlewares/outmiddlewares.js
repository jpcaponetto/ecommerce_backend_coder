import passport from "passport";
import customError from "../../utils/createError.js";
import { outError } from "../../utils/causeError.js";
import dirErrors from "../../utils/dirErrors.js";

export const outPassport = (strategy) => (req, res, next) => {
  passport.authenticate(strategy, { session: false }, (err, payload, info) => {
    if (err) {
      return next(err);
    }
    if (!payload) {
      customError.errorCustom({
        name: "No estas autenticado",
        cause: outError(401),
        message: "Tienes que autenticar",
        code: dirErrors.outError,
      });
    }
    req.user = payload;
    return next();
  })(req, res, next);
};

export const authWitPassport = (roleG) => (req, res, next) => {
  if (!req.user) {
    return res.status(401);
  }

  const { role } = req.user;

  if (roleG.includes(role)) {
    return next();
  }

  customError.errorCustom({
    name: "Sin permiso ❌",
    cause: outError(403),
    message: "No tienes la autorización",
    code: dirErrors.outError,
  });
};
