import cartDao from "../dao/cartDao.js";
import ProductDao from "../dao/productDao.js";
import cartRepository from "../repositories/cartRepository.js";
import productRepository from "../repositories/productRepository.js";

export const cartServices = new cartRepository(new cartDao());
export const productServices = new productRepository(new ProductDao());
