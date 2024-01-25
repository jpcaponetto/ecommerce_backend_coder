import { banderas } from "../utils.js";

export let productDao;

switch (banderas.p) {
  case "MONGO":
    let daoMongo = (await import("./product.dao.js")).default;
    productDao = daoMongo;
    break;

  case "MEMORY":
    let daoMemory = (await import("./product.dao.memory.js")).default;
    productDao = daoMemory;
    break;
}
