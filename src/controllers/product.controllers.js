import productServices from "../services/product.services.js";
import { ErrorRequest } from "../utils/errors.js";

export default class productController {
  getAll(criteria, options) {
    return productServices.getAll(criteria, options);
  }
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
      throw new ErrorRequest(msg);
    }
    return productServices.createProduct(body);
  }
}
