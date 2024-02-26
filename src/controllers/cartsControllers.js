import { cartServices } from "../services/services.js";
const getCarts = async (req, res, next) => {
  try {
    const carts = await cartServices.getAll();
    res.status(200).json(carts);
  } catch (error) {
    next(error);
  }
};

export default { getCarts };
