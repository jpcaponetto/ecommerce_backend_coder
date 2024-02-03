import userServices from "../services/user.services.js";
import customError from "../utils/createError.js";
import dirErrors from "../utils/dirErrors.js";
import { requieredFields } from "../utils/causeError.js";

export default class userController {
  static createProduct(body) {
    const { firstName, email, age } = body;
    if (!firstName || !email || !age) {
      customError.errorCustom({
        name: "Requiered Fields",
        cause: requieredFields(body),
        message: "Requiered Fields",
        code: dirErrors.requieredFieldsError,
      });
    }

    return userServices.createUser(body);
  }
  static updateProduct(body, id) {
    return userServices.updateOne(id, body);
  }
  static deleteProduct(id) {
    return userServices.deleteOne(id);
  }
  static findUserByEmail(mail) {
    return userServices.findUserByEmail(mail);
  }
}
