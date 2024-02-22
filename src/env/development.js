export default class Development {
  static wenv = {
    api: { port: process.env.DEVPORT, host: process.env.LOCALHOST },
    mongo: {
      db: process.env.database,
      mongouser: process.env.MONGO_USER,
      cluster: process.env.cluster,
      password: process.env.PASSWORD_MONGO,
      uri: `mongodb+srv://${process.env.MONGO_USER}:${process.env.PASSWORD_MONGO}@${process.env.cluster}/${process.env.database}?retryWrites=true&w=majority`,
      cookie: {
        secret: process.env.secretcookie,
        options: { maxAge: 60000, signed: true, httpOnly: true },
      },
      github: {
        clientID: process.env.clientid,
        clientSecret: process.env.secretclient,
        callbackURL: process.env.gitHubCallback,
      },
      jsonwebtoken: {
        secret: process.env.secretjsonwtoken,
        expiresIn: process.env.expiretoken,
      },
      twilio: {
        acountsid: process.env.ACOUNTSID,
        authtoken: process.env.AUTHTOKEN,
      },
      mail: {
        MAILUSER: process.env.MAILUSER,
        MAILPASS: process.env.MAILPASS,
        MAILPORT: process.env.MAILPORT,
      },
    },
  };
}
