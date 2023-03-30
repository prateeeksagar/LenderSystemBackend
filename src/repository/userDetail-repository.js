const { UserDetail } = require("../models/index");

class UserDetailsRepository {
  async createUserDetail(data) {
    try {
      const userDetail = await UserDetail.create(data);
      return userDetail;
    } catch (error) {
      console.log("something went wrong in the user detail repository");
      throw { error };
    }
  }

  async updateUserDetail(userId, data) {
    try {
      const userDetail = await UserDetail.update(data, {
        where: {
          userId: userId,
        },
      });
      return userDetail;
    } catch (error) {
      console.log("something went wrong in the user detail repository");
      throw { error };
    }
  }

  async getUserDetail(userId) {
    try {
      const userDetail = await UserDetail.findOne({
        where: {
          uid: userId,
        },
      });
    } catch (error) {
      console.log("something went wrong in the user detail repo");
      throw { error };
    }
  }
}

module.exports = UserDetailsRepository;
