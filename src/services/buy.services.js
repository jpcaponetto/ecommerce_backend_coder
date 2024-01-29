import productDao from "../dao/product.dao.js";

export default class buyServices {
  static stockUpdate(idList, quantity) {
    return productDao.updateStock(idList, quantity);
  }
}
