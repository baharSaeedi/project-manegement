const { body } = require("express-validator");

function registerValidator() {
  return [
    body("username").custom((value, ctx) => {
      if (value) {
        const usernameRegex = /^[a-z]+[a-z0-9\_\.]{2,}/gi;
        if (usernameRegex.test(value)) {
          return true;
        }
        throw "user name is not valid";
      }
      throw "user name can not be empty";
    }),
    body("email").isEmail().withMessage("email is not valid"),
    body("mobile").isMobilePhone("fa-IR").withMessage("mobile is not valid"),
    body("password")
      .isLength({ min: 6, max: 16 })
      .withMessage(
        "pasword length should be at least 6 char and at most 16 char"
      )
      .custom((value, ctx) => {
        if (!value) throw "password can not be empty";
        if (value !== ctx?.req?.body?.confirmPassword) {
          throw "password and confirm password aren't equal";
        }
        return true;
      }),
  ];
}

module.exports = {
  registerValidator,
};
