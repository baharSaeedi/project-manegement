const { Project: projectModel } = require("../../db/models/project");

class Project {
  async createProject(req, res, next) {
    try {
      const { title, text } = req.body;
      const owner = req.user.userId;
      const project = await projectModel.create({ title, text, owner });
      if (!project) throw { status: 401, message: "project not created" };
      return res.status(200).json({
        status: 200,
        message: "project created",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  ProjectController: new Project(),
};
