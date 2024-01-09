import userSchema from "./models/user.model.js";

//lógica de negocio ^^
export default class userDao {
  static createUser(body) {
    return userSchema.create(body);
  }
  static updateUser(body, id) {
    return userSchema.updateOne({ _id: id }, { $set: body });
  }
  static deleteUser(id) {
    return userSchema.deleteOne({ _id: id });
  }
  static findUserByEmail(email) {
    return userSchema.findOne({ email: email });
  }
}
