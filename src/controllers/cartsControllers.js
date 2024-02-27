import { addProductLogic } from "../custom/logic.js";
import { cartServices } from "../services/services.js";

const getCarts = async (req, res, next) => {
  try {
    const carts = await cartServices.getAll();
    res.status(200).json(carts);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res, next) => {
  const { id } = req.params;
  const body = { _id: id };
  try {
    const carts = await cartServices.getBy(body);
    res.status(200).json(carts);
  } catch (error) {
    next(error);
  }
};

const populate = async (req, res, next) => {
  const { id } = req.params;
  const body = { _id: id };
  try {
    const cart = await cartServices.populate(body);
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

const createCart = async (req, res, next) => {
  const body = { products: [] };
  try {
    const cart = await cartServices.save(body);
    res.status(201).json(cart);
  } catch (error) {
    next(error);
  }
};

const addCart = async (req, res, next) => {
  const { id, pid } = req.params;
  const { quantity } = req.body;
  try {
    const cart = await addProductLogic(id, pid, quantity);
    await cartServices.update(id, cart);
    res.json(cart);
  } catch (error) {
    next(error);
  }
};

export default { getCarts, getById, populate, createCart, addCart };
