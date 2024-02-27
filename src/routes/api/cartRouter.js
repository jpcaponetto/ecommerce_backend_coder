import { Router } from "express";
import cltCarts from "../../controllers/cartsControllers.js";

const rrCarts = Router();

rrCarts.get("/", cltCarts.getCarts);
rrCarts.get("/:id", cltCarts.getById);

export default rrCarts;
