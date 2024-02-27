import productSchema from "./models/product.model.js";
export default class ProductDao {
  get = (params) => {
    return productSchema.find(params);
  };

  getBy = (params) => {
    return productSchema.findOne(params);
  };

  populate = (id) => {
    return productSchema.findOne(id).populate("products.product");
  };

  save = (payload) => {
    return productSchema.create(payload);
  };

  update = (id, payload) => {
    return productSchema.findByIdAndUpdate(id, { $set: payload });
  };

  delete = (id) => {
    return productSchema.findByIdAndDelete(id);
  };
}
