import { Router } from "express";
import mocksController from "../../controllers/mocks.controllers.js";

const routerMocks = Router();

routerMocks.get("/mockingproducts", (req, res, next) => {
  const mock = mocksController.mocksProducts();
  res.json(mock);
});

export default routerMocks;
