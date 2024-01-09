import userDao from "../dao/user.dao.js";
import cartServices from "./cart.services.js";

export default class userServices {
  static async createUser(body) {
    const cart = await cartServices.createCart();
    const cid = cart._id;
    body.cid = cid;
    return userDao.createUser(body);
  }
  static updateUser(body, id) {
    return userDao.updateUser(body, id);
  }
  static deleteUser(id) {
    return userDao.deleteUser(id);
  }
  static findUserByEmail(mail) {
    return userDao.findUserByEmail(mail);
  }
}
