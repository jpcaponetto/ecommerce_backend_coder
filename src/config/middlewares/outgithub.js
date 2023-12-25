import passport from "passport";

export const outGitHub = () => (req, res, next) => {
  passport.authenticate(
    "github",
    { session: false, scope: ["user:email"] },
    (error, payload, info) => {
      if (error) {
        return next(error);
      }
      if (!payload) {
        return res.status(401).json({ mes: info.message });
      }
      req.user = payload;
      return next();
    }
  )(req, res, next);
};
