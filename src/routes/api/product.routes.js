import { Router } from "express";
import productController from "../../controllers/product.controllers.js";

const productRouterApi = Router();

const productCtlr = new productController();

productRouterApi.post("/test/products", async (req, res) => {
  const { body } = req;
  try {
    const product = await productCtlr.createProduct(body);
    res.status(201).json(product);
  } catch (error) {
    res.json(error.msg);
  }
});

export default productRouterApi;
