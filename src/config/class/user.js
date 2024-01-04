import userModel from "../../dao/models/user.model.js";

export const createUser = async (body, cid) => {
  const payload = { ...body, cid };
  const user = await userModel.create(payload);
  return user;
};

export const searchByEmail = async (email) => {
  const user = await userModel.findOne({ email });
  return user;
};
