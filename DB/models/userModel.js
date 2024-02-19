import mongoose from "mongoose";

const userScehma = new mongoose.Schema(
  {
    userName: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
  },
  { timestamps: true }
);

export const userModel = mongoose.model("user", userScehma);
