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

export default { getCarts, getById };
