import productSchema from "./models/product.model.js";

export default class productDao {
  static getAll(criteria, options) {
    return productSchema.paginate(criteria, options);
  }
  static createProduct(body) {
    console.log("hola");
    return productSchema.create(body);
  }
  static updateProduct(body, id) {
    return productSchema.updateOne({ _id: id }, { $set: body });
  }
  static deleteProduct(id) {
    return productSchema.deleteOne({ _id: id });
  }
  static getProduct(id) {
    return productSchema.findOne({ _id: id });
  }
  static test() {
    return "Hola desde Mongo ✅";
  }
}
