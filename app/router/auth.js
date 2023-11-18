const { registerValidator } = require("../http/validations/auth");
const { validate } = require("../http/middlewares/validate");
const { AuthController } = require("../http/controllers/auth.controller");

const { Router } = require("express");
const router = Router();

router.post(
  "/register",
  registerValidator(),
  validate,
  AuthController.register
);

module.exports = {
  authRoutes: router,
};
