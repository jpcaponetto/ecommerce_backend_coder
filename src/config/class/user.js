import userModel from "../../models/user.model.js";

export const createUser = async (body, id) => {
  const payload = { ...body, id };
  const user = await userModel.create(payload);
  return user;
};

export const searchByEmail = async (email) => {
  const user = await userModel.findOne({ email });
  return user;
};
