import mongoose from "mongoose";

const Item = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "products" },
  quantity: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
  products: { type: [Item], default: [] },
});

export default mongoose.model("carts", cartSchema);
