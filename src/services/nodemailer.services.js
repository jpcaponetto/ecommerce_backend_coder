import { factory } from "../env/environment.js";
import nodemailer from "nodemailer";
import { banderas } from "../utils.js";

const { wenv } = factory(banderas.e);

export default class NodeMailerServices {
  constructor() {
    this.transport = nodemailer.createTransport({
      service: "gmail",
      port: wenv.mongo.mail.MAILPORT,
      auth: {
        user: wenv.mongo.mail.MAILUSER,
        pass: wenv.mongo.mail.MAILPASS,
      },
    });
  }
  static getInstance() {
    if (!NodeMailerServices.instance) {
      NodeMailerServices.instance = new NodeMailerServices();
    }
    return NodeMailerServices.instance;
  }
  enviarCorreo(to, subject, template, attach = []) {
    return this.transport.sendMail({
      from: wenv.mongo.mail.MAILUSER,
      to,
      subject,
      html: template,
      attachments: attach,
    });
  }
}
