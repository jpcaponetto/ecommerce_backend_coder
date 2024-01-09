import cartDao from "../dao/cart.dao.js";

export default class cartServices {
  static createCart() {
    return cartDao.createCart();
  }

  static findCart(id) {
    return cartDao.findCart(id);
  }

  static async addProductToCart(cid, pid, quantity) {
    return cartDao.addProductToCart(cid, pid, quantity);
  }
  static deleteById(cid) {
    return cartDao.deleteCartById(cid);
  }
  static deleteProductCart(cid, pid) {
    return cartDao.deleteProductCart(cid, pid);
  }
}
