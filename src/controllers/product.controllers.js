import productServices from "../services/product.services.js";
import { ErrorRequest } from "../utils/errors.js";

export default class productController {
  getAll(criteria, options) {
    return productServices.getAll(criteria, options);
  }

  //create
  createProduct(body) {
    const { title, code, category, description, stock, price, status } = body;
    if (
      !title ||
      !code ||
      !category ||
      !description ||
      !stock ||
      !price ||
      !status
    ) {
      throw new ErrorRequest("Todos los campos son requeridos ❌❌❌");
    }
    return productServices.createProduct(body);
  }

  //update
  updateProduct(body, id) {
    return productServices.updateProduct(body, id);
  }

  //delete
  deleteProduct(id) {
    return productServices.deleteProduct(id);
  }

  // read
  getProduct(id) {
    return productServices.getProduct(id);
  }

  test() {
    return productServices.test();
  }
}
