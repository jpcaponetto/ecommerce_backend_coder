import productSchema from "./models/product.model.js";

export default class productDao {
  static getAll(criteria, options) {
    return productSchema.paginate(criteria, options);
  }
  static createProduct(body) {
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
  static async updateStock(idList, quantity) {
    try {
      await Promise.all(
        idList.map(async (p, index) => {
          await productSchema.updateOne(
            { _id: p },
            { $inc: { stock: quantity[index] } }
          );
        })
      );
    } catch (error) {}
  }
}
