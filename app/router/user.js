const { Router } = require("express");
const { checkAuth } = require("../http/middlewares/checkAuth");
const { UserController } = require("../http/controllers/user.controller");

const router = Router();

router.get("/profile", checkAuth, UserController.getProfile);

module.exports = {
  userRoutes: router,
};
