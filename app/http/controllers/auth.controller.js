const { User } = require("../../db/models/user");
const {
  hashString,
  checkHashString,
  jwtTokenGenerator,
} = require("../../modules/function");

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

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ userName: username });
      if (!user) {
        throw { status: 401, message: "username or password aren't valid" };
      }
      const checkPassword = checkHashString(password, user.password);
      if (!checkPassword) {
        throw { status: 401, message: "username or password aren't valid" };
      }

      const token = jwtTokenGenerator({ userId: user._id });

      return res.status(200).json({
        success: true,
        message: "loged in",
        token: token,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  AuthController: new Authentication(),
};
