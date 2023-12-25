export const env = {
  dev: {
    api: { PORT: process.env.PORT, host: process.env.LOCALHOST },
    mongo: {
      database: process.env.database,
      userdb: process.env.MONGO_USER,
      passwordmongo: process.env.PASSWORD_MONGO,
      cluster: process.env.cluster,
      URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.PASSWORD_MONGO}@${process.env.cluster}/${process.env.database}?retryWrites=true&w=majority`,
    },
    github: {
      clientID: process.env.clientid,
      clientSecret: process.env.secretclient,
      callbackURL: process.env.gitHubCallback,
    },
    cookie: {
      secret: process.env.secretcookie,
      options: { maxAge: 60000, signed: true, httpOnly: true },
    },
    jsonwebtoken: {
      secret: process.env.secretjsonwtoken,
      expiresIn: process.env.expiretoken,
    },
  },
};
