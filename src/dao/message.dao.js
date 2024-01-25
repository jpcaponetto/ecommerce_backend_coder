import messageSchema from "./models/message.model.js";

export default class messageDao {
  static getAll() {
    return messageSchema.find();
  }
  static test(msg) {
    return messageSchema.create(msg);
  }
}
