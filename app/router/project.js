const { Router } = require("express");
const { checkAuth } = require("../http/middlewares/checkAuth");
const { ProjectController } = require("../http/controllers/project.controller");
const { createProjectValidator } = require("../http/validations/project");
const { validate } = require("../http/middlewares/validate");

const router = Router();

router.post(
  "/createProject",
  checkAuth,
  createProjectValidator(),
  validate,
  ProjectController.createProject
);

router.get(
  "/getListOfProject",
  checkAuth,
  ProjectController.getListOfProjectByOwner
);

router.get(
  "/getProjectById/:id",
  checkAuth,
  ProjectController.getListOfProjectByOwnerAndId
);

router.delete(
  "/deleteOwnerProjectById/:id",
  checkAuth,
  ProjectController.deleteProjectByOwnerAndId
);

module.exports = {
  projectRoutes: router,
};
