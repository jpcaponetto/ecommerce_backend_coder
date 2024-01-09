import userServices from "../services/user.services.js";

export default class userController {
  static createProduct(body) {
    return userServices.createUser(body);
  }
  static updateProduct(body, id) {
    return userServices.updateOne(id, body);
  }
  static deleteProduct(id) {
    return userServices.deleteOne(id);
  }
  static findUserByEmail(mail) {
    return userServices.findUserByEmail(mail);
  }
}
