import { Router } from "express";
import cltCarts from "../../controllers/cartsControllers.js";

const rrCarts = Router();

rrCarts.get("/:id/populate", cltCarts.populate);
rrCarts.get("/:id", cltCarts.getById);
rrCarts.get("/", cltCarts.getCarts);

export default rrCarts;
