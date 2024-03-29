import { Router } from "express";
import cartSchema from "../../dao/models/cart.model.js";
import cartController from "../../controllers/cart.controllers.js";
import { outPassport } from "../../config/middlewares/outmiddlewares.js";

const cartRouter = Router();

cartRouter.get("/test/cart", async (req, res, next) => {
  const cart = await cartSchema.find();
  res.json(cart);
});

cartRouter.post("/test/cart", async (req, res, next) => {
  try {
    const cart = await cartController.createCart();
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
});

cartRouter.post(
  "/test/cart/:cid/purchase",
  outPassport("jwt"),
  async (req, res, next) => {
    const out = await cartController.buyProduct(req.user);
    res.json(out);
  }
);

cartRouter.post("/test/cart/:cid/:pid", async (req, res, next) => {
  const { cid, pid } = req.params;
  const { quantity } = req.body;
  try {
    const cart = await cartController.addProductToCart(cid, pid, quantity);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
});

cartRouter.get("/test/cart/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const cart = await cartController.findCart(id);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
});

cartRouter.delete("/test/cart/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    await cartController.deleteById(id);
    res.status(200).json("El Carrito se eliminó ✅");
  } catch (error) {
    next(error);
  }
});

cartRouter.delete("/test/cart/:cid/:pid", async (req, res, next) => {
  const { cid, pid } = req.params;
  try {
    await cartController.deleteProductCart(cid, pid);
    res.status(200).json("El producto ha sido eliminado");
  } catch (error) {
    next(error);
  }
});

export default cartRouter;
