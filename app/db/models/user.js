const { Schema, model } = require("mongoose");

const UserModel = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    userName: { type: String, required: true, uniqe: true },
    password: { type: String },
    mobile: { type: String, required: true, unique: true },
    roles: { type: String, default: ["USER"] },
    email: { type: String, required: true, unique: true },
    skills: { type: Array, default: [] },
    teams: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserModel);

module.exports = { User };
