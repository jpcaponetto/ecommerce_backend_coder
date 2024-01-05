import productDao from "../dao/product.dao.js";

export default class productServices {
  static getAll(criteria, options) {
    return productDao.getAll(criteria, options);
  }
  static createProduct(body) {
    return productDao.createProduct(body);
  }
  static updateProduct(body, id) {
    return productDao.updateProduct(body, id);
  }
  static deleteProduct(id) {
    return productDao.deleteProduct(id);
  }
  static getProduct(id) {
    return productDao.getProduct(id);
  }
}
