import cartSchema from "./models/cart.model.js";
export default class Cart {
  get = (params) => {
    return cartSchema.find(params);
  };

  getBy = (params) => {
    return cartSchema.findOne(params);
  };

  populate = (id) => {
    return cartSchema.findOne(id).populate("products.product");
  };

  save = (payload) => {
    return cartSchema.create(payload);
  };

  update = (id, payload) => {
    return cartSchema.findByIdAndUpdate(id, { $set: payload });
  };

  delete = (id) => {
    return cartSchema.findByIdAndDelete(id);
  };
}
