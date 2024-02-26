import { Router } from "express";
import cltCarts from "../../controllers/cartsControllers.js";

const rrCarts = Router();

rrCarts.get("/", cltCarts.getCarts);

export default rrCarts;
