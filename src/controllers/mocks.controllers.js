import { faker } from "@faker-js/faker";

export default class mocksController {
  static mocksProducts() {
    let mocksproducts = [];
    for (let i = 0; i < 100; i++) {
      const mocks = {
        title: faker.commerce.productName(),
        code: faker.datatype.uuid(),
        category: faker.commerce.department(),
        description: faker.commerce.productDescription(),
        stock: faker.datatype.number(),
        price: parseInt(faker.commerce.price()),
        status: faker.datatype.boolean(),
        thumbnails: [faker.image.imageUrl()],
      };
      mocksproducts.push(mocks);
    }
    return mocksproducts;
  }
}
