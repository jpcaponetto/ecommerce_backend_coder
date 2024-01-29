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
  static stock(cart) {
    const listStock = cart.products.filter(
      (p) => p.product.stock >= p.quantity
    );
    const out = cart.products.filter((p) => p.product.stock < p.quantity);
    const response = {
      listStock,
      out,
    };
    return response;
  }
  static getId(cart) {
    const list = cart.map((p) => p.product._id);
    return list;
  }
  static getQuantiy(cart) {
    const list = cart.map((p) => p.quantity * -1);
    return list;
  }
  static populate(cart) {
    return cartDao.populate(cart);
  }
}
