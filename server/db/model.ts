import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  details: {
    type: String,
    default: "",
  },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
