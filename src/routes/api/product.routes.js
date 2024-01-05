import { Router } from "express";
import productController from "../../controllers/product.controllers.js";
import { paginateResponse } from "../../config/class/response.js";

const productRouterApi = Router();

const productCtlr = new productController();

//endpoints

productRouterApi.post("/test/products", async (req, res, next) => {
  const { body } = req;
  try {
    const product = await productCtlr.createProduct(body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

productRouterApi.get("/test/products", async (req, res) => {
  const { limit = 10, page = 1, category, stock, sort } = req.query;
  const options = { limit, page };
  const criteria = {};

  if (sort) {
    options.sort = { price: sort }; // ordenar de forma ascen desc los productos por precio
  }

  if (category) {
    criteria.category = category; // filtro por categoria
  }

  if (stock) {
    criteria.stock = stock; // filtro por stock
  }

  try {
    const product = await productCtlr.getAll(criteria, options);
    const paginate = paginateResponse(product);

    res.status(200).json(paginate);
  } catch (error) {}
});

productRouterApi.get("/test/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productCtlr.getProduct(id);
    res.status(200).json(product);
  } catch (error) {}
});

productRouterApi.put("/test/products/:id", async (req, res, next) => {
  const { body } = req;
  const { id } = req.params;

  try {
    const product = await productCtlr.updateProduct(body, id);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
});

productRouterApi.delete("/test/products/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    await productCtlr.deleteProduct(id);
    res.status(200).json({ msg: "deleted" });
  } catch (error) {
    next(error);
  }
});

export default productRouterApi;
