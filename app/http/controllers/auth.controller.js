const { User } = require("../../db/models/user");
const { hashString } = require("../../modules/function");

class Authentication {
  async register(req, res, next) {
    try {
      const { username, email, password, mobile } = req.body;
      const hashPassword = hashString(password);

      const user = await User.create({
        userName: username,
        email: email,
        mobile: mobile,
        password: hashPassword,
      }).catch((err) => {
        if (err?.code == 11000)
          throw { message: "کاربری با این مشخصات قبلا ثبت شده است." };
      });

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  AuthController: new Authentication(),
};
