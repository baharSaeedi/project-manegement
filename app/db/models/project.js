const { Schema, model, Types } = require("mongoose");

const ProjectModel = new Schema(
  {
    title: { type: String },
    text: { type: String },
    image: { type: [Types.ObjectId], default: [] },
    team: { type: Types.ObjectId },
    owner: { type: Types.ObjectId, required: true },
    show: { type: Boolean, default: true },
    tags: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

const Project = model("Project", ProjectModel);

module.exports = { Project };
