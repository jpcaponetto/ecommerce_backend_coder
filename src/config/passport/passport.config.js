import passport from "passport";
import { Strategy as jwtStrategy } from "passport-jwt";
import { jwtOptions } from "./jsonwebtokenoptions.js";
import { Strategy as githubStrategy } from "passport-github2";
import { gitHubOptions } from "./githuboptions.js";
import { searchByEmail } from "../class/user.js";
import { createCart } from "../class/cart.js";
import { createUser } from "../class/user.js";

export const initPassport = () => {
  passport.use(
    "jwt",
    new jwtStrategy(jwtOptions, (payload, done) => {
      return done(null, payload);
    })
  );

  passport.use(
    "github",
    new githubStrategy(
      gitHubOptions,
      async (accessToken, refreshToken, profile, done) => {
        const { provider, displayName } = profile;
        const email = profile._json.email;

        if (!email) {
          return done(new Error("Errors"));
        }

        const user = await searchByEmail(email);
        if (user) {
          done(null, user);
        }

        const cart = await createCart();

        const bodyUser = {
          firstName: displayName,
          lastName: "",
          role: "user",
          email: email,
          provider: provider,
          password: "",
          age: 20,
          cid: cart._id,
        };

        const user2 = await createUser(bodyUser, cart._id);

        return done(null, user2);
      }
    )
  );
};
