import buyServices from "../services/buy.services.js";
import cartServices from "../services/cart.services.js";
import ticketServices from "../services/ticket.services.js";

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
  static async buyProduct(user) {
    const cart = await cartServices.populate(user);
    const stock = cartServices.stock(cart);
    const getid = cartServices.getId(stock.listStock);
    const quantity = cartServices.getQuantiy(stock.listStock);
    const out = buyServices.stockUpdate(getid, quantity);
    const total = stock.listStock.reduce(
      (acc, prod) => acc + prod.product.price * prod.quantity,
      0
    );
    const ticket = { amount: total, purcharser: "Juancito" };
    const out2 = await ticketServices.createTicket(ticket);
    return out2;
  }
}
