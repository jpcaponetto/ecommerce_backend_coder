import cartDao from "../dao/cartDao.js";
import cartRepository from "../repositories/cartRepository.js";

export const cartServices = new cartRepository(new cartDao());
