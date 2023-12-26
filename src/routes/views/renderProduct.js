import { Router } from "express";
import { getProducts } from "../../config/class/product.js";
import { paginateResponse } from "../../config/class/response.js";
import { outPassport } from "../../config/middlewares/outmiddlewares.js";

const routerProduct = Router();

routerProduct.get("/products", outPassport("jwt"), async (req, res) => {
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

  const products = await getProducts(criteria, options);
  const paginate = paginateResponse(products);

  console.log(req.user);
  res.render("products", { paginateData: paginate, user: req.user });
});

export default routerProduct;
