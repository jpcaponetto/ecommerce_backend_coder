import cartServices from "../services/cart.services.js";

export default class cartController {
  static createCart() {
    return cartServices.createCart();
  }

  static findCart(id) {
    return cartServices.findCart(id);
  }

  static async addProductToCart(cid, pid, quantity) {
    return cartServices.addProductToCart(cid, pid, quantity);
  }
  static deleteById(cid) {
    return cartServices.deleteById(cid);
  }
  static deleteProductCart(cid, pid) {
    return cartServices.deleteProductCart(cid, pid);
  }
}
