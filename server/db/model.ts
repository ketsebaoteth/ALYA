import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: String,
  email: {
    type: String,
    default: "",
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
