import productSchema from "../../dao/models/product.model.js";

export const createProduct = async (body) => {
  const product = await productSchema.create(body);
  return product;
};

export const updateProduct = async (body, id) => {
  await productSchema.updateOne({ _id: id }, { $set: body });
};

export const deleteProduct = async (id) => {
  await productSchema.deleteOne({ _id: id });
};

export const getProducts = async (criteria, options) => {
  const out = await productSchema.paginate(criteria, options);
  return out;
};
