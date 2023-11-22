const { body } = require("express-validator");

function createProjectValidator() {
  return [
    body("title").notEmpty().withMessage("title can not be empty"),
    body("tags")
      .isArray({ min: 0, max: 10 })
      .withMessage("tags should be array with length between 0 - 10 "),
    body("text").notEmpty().withMessage("text can not be empty"),
  ];
}

module.exports = {
  createProjectValidator,
};
