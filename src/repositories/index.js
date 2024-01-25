import { productDao } from "../dao/factory.js";
import productRepositorie from "./productRepositorie.js";

export const productRepo = new productRepositorie(productDao);
