const { User: userModel } = require("../../db/models/user");

class User {
  async getProfile(req, res, next) {
    try {
      console.log(req.user);
      const user = await userModel.findOne({ _id: req.user.userId });
      return res.status(200).json({ user: user });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  UserController: new User(),
};
