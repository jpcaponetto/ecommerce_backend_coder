import cartSchema from "./models/cart.model.js";
import productServices from "../services/product.services.js";
import { ErrorRequest } from "../utils/errors.js";

export default class cartDao {
  static createCart() {
    const body = { products: [] };
    return cartSchema.create(body);
  }
  static findCart(id) {
    return cartSchema.findOne({ _id: id });
  }
  static async addProductToCart(cid, pid, quantity) {
    const cart = await this.findCart(cid);
    const product = await productServices.getProduct(pid);
    if (!cart) {
      throw new ErrorRequest("Error, no se ha encontrado el carrito ❌");
    }
    if (!product) {
      throw new ErrorRequest("Error, no se ha encontrado el producto ❌");
    }
    const products = cart.products.find((productw) => productw.product == pid);
    if (products) {
      products.quantity += quantity;
      await cartSchema.updateOne({ _id: cid }, { $set: cart });
      return cart;
    }
    cart.products.push({ product: pid, quantity: quantity });
    await cartSchema.updateOne({ _id: cid }, { $set: cart });
    return cart;
  }
  static deleteCartById(cid) {
    return cartSchema.deleteOne({ _id: cid });
  }
  static async deleteProductCart(cid, pid) {
    const cart = await this.findCart(cid);
    if (!cart) {
      throw new ErrorRequest("Cart Not Found");
    }
    const idx = cart.products.findIndex((productw) => productw.product == pid);
    if (idx == -1) {
      throw new ErrorRequest("Product Not Found");
    }
    cart.products.splice(idx, 1);
    await cartSchema.updateOne({ _id: cid }, { $set: cart });
    return cart;
  }
  static populate(cart) {
    return cartSchema.findOne({ _id: cart }).populate("products.product");
  }
}
