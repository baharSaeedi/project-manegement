const { Router } = require("express");
const { checkAuth } = require("../http/middlewares/checkAuth");
const { UserController } = require("../http/controllers/user.controller");

const router = Router();

router.get("/profile", checkAuth, UserController.getProfile);
router.get("/profile", checkAuth, UserController.editProfile);

module.exports = {
  userRoutes: router,
};
