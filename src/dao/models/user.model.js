import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    role: { type: String, enum: ["admin", "user"] },
    email: { type: String, unique: true },
    provider: { type: String },
    password: { type: String },
    age: { type: Number, require: true },
    cid: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
