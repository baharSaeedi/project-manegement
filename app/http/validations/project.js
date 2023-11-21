const { body } = require("express-validator");

function createProjectValidator() {
  return [
    body("title").notEmpty().withMessage("title can not be empty"),
    body("text").notEmpty().withMessage("text can not be empty"),
  ];
}

module.exports = {
  createProjectValidator,
};
