const {
  registerValidator,
  loginValidator,
} = require("../http/validations/auth");
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

router.put("/login", loginValidator(), validate, AuthController.login);

module.exports = {
  authRoutes: router,
};
