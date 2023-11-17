const { Schema, model, Types } = require("mongoose");

const TeamModel = new Schema(
  {
    name: { type: String, required: true },
    descriotion: { type: String },
    users: { type: [Types.ObjectId], default: [] },
    owner: { type: Types.ObjectId, required: true },
  },
  {
    timestamps: true,
  }
);

const Team = model("Team", TeamModel);

module.exports = { Team };
