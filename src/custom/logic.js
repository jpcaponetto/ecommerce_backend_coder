import { cartServices } from "../services/services.js";
import { productServices } from "../services/services.js";

const checksIds = async (id, pid) => {
  const cart = await cartServices.getBy({ _id: id });
  if (!cart) {
    throw new Error("Cart not found");
  }
  const product = await productServices.getBy({ _id: pid });
  if (!product) {
    throw new Error("Product not found");
  }
  return cart;
};

export const addProductLogic = async (id, pid, quantity) => {
  const cart = await checksIds(id, pid);
  const out = cart.products.find((product) => (product.product = pid));
  if (out) {
    out.quantity += quantity;
    return cart;
  } else {
    cart.products.push({ product: pid, quantity: quantity });
  }
};
