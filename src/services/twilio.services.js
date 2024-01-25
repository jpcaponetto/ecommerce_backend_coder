import twilio from "twilio";

export default class twilioServices {
  static instance = null;
  constructor(accountsid, authtoken) {
    this.client = twilio(accountsid, authtoken);
  }
  sendmessage(to, body) {
    return this.client.messages.create({
      to,
      body,
      from: process.env.TWILIONUMBER,
    });
  }
}
