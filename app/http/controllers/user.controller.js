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
  async editProfile(req, res, next) {
    try {
      const profileData = req.body;
      const userId = req.user.userId;
      let fields = ["firstName", "lastName", "skills"];
      let wrongValues = ["", " ", undefined, NaN, null, 0, -1];
      Object.entries(profileData).forEach(([key, value]) => {
        if (!fields.includes(key)) delete profileData[key];
        if (wrongValues.includes(value)) delete profileData[key];
      });

      const editedProfile = await userModel.updateOne(
        { _id: userId },
        { $set: profileData }
      );

      if (editedProfile.modifiedCount > 0) {
        return res.status(200).json({
          status: 200,
          message: "profile updated",
        });
      }

      return res.status(400).json({ message: "something went wrong!" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = {
  UserController: new User(),
};
