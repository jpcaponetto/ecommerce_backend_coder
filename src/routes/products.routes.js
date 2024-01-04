import { Router } from "express";
import { paginateResponse } from "../config/class/response.js";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../config/class/product.js";
import productController from "../controllers/product.controllers.js";

const productRouter = Router();

productRouter.post("/products", async (req, res) => {
  const { body } = req;
  try {
    const product = await createProduct(body);
    res.json(product);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

productRouter.put("/products/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  try {
    await updateProduct(body, id);
    return res.status(201).json({ msg: "Success 👍" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

productRouter.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await deleteProduct(id);
    return res.status(201).json({ msg: "success" });
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
});

productRouter.post("/t", async (req, res) => {
  const { body } = req;
  try {
    productController.createProduct(body);
    return res.status(200).json({ msg: "Created" });
  } catch (error) {}
});

productRouter.get("/products", async (req, res) => {
  const { limit = 10, page = 1, category, stock, sort } = req.query;
  const options = { limit, page };
  const criteria = {};
  if (sort) {
    options.sort = { price: sort };
  }
  if (category) {
    criteria.category = category;
  }
  if (stock) {
    criteria.stock = stock;
  }
  try {
    const products = await getProducts(criteria, options);
    const out = paginateResponse(products);
    res.status(200).json(out);
  } catch (error) {
    res.json({ msg: error.message });
  }
});

productRouter.get("/products/:id", async (req, res) => {});

export default productRouter;
