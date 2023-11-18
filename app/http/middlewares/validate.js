const { validationResult } = require("express-validator");

function validate(req, res, next) {
  const errors = validationResult(req);
  const messages = {};
  if (errors?.errors?.length > 0) {
    errors.errors.forEach((error) => {
      messages[error.path] = error.msg;
    });
    return res.status(400).json({
      status: 400,
      success: false,
      messages,
    });
  }
  next();
}

module.exports = {
  validate,
};
