import cartSchema from "../../dao/models/cart.model.js";

export const createCart = async () => {
  const body = { products: [] };
  const cart = await cartSchema.create(body);
  return cart;
};
