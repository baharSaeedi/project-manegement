const { Router } = require("express");
const { authRoutes } = require("./auth");
const { userRoutes } = require("./user");
const { teamRoutes } = require("./team");
const { projectRoutes } = require("./project");

const router = Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/team", teamRoutes);
router.use("/project", projectRoutes);

module.exports = {
  appRoutes: router,
};
