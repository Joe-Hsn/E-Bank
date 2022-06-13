import valdiator from "validator";
import mongoose from "mongoose";

export type UserObject = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  admin: boolean;
  status: string;
};

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pleace add a name"],
    },
    email: {
      type: String,
      required: [true, "Pleace add a email"],
      unique: true,
      validate: [valdiator.isEmail, "Please add a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Pleace add a phone"],
    },
    password: {
      type: String,
      required: [true, "Pleace add a password"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    admin: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "active", "rejected"],
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", userSchema);