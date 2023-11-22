const { body, param } = require("express-validator");

function createProjectValidator() {
  return [
    body("title").notEmpty().withMessage("title can not be empty"),
    body("tags")
      .isArray({ min: 0, max: 10 })
      .withMessage("tags should be array with length between 0 - 10 "),
    body("text").notEmpty().withMessage("text can not be empty"),
  ];
}

function mongoIdValidator() {
  return [param("id").isMongoId().withMessage("id is not valid")];
}
module.exports = {
  createProjectValidator,
  mongoIdValidator,
};
