const { Project: projectModel } = require("../../db/models/project");

class Project {
  async createProject(req, res, next) {
    try {
      const { title, text, tags } = req.body;
      const owner = req.user.userId;
      const project = await projectModel.create({ title, text, owner, tags });
      if (!project) throw { status: 401, message: "project not created" };
      return res.status(200).json({
        status: 200,
        message: "project created",
      });
    } catch (error) {
      next(error);
    }
  }
  async getListOfProjectByOwner(req, res, next) {
    try {
      const owner = req.user.userId;
      const projects = await projectModel.find({ owner });
      return res.status(200).json({
        status: 200,
        projects: projects,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  ProjectController: new Project(),
};
