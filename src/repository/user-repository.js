const { User } = require("../models/index");
const uniqid = require("uniqid");
class UsersRepository {
  async createUser(data) {
    try {
      const authrizationId = uniqid();
      const user = await User.create({
        // data
        ...data,
        authId: authrizationId,
      });
      return user;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.destroy({
        where: { uid: userId },
      });
      return user;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async updateUser(userId, data) {
    try {
      const user = await User.update(data, {
        where: {
          uid: userId,
        },
      });
      return user;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async getUser(userId) {
    try {
      const user = await User.findByPk(userId);
      return user;
    } catch (error) {
      console.log("somerthing went wronog in the user repo");
      throw { error };
    }
  }

  async getAllUser() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async getByPan(userPanId) {
    try {
      const check = await User.findOne({
        where: {
          panId: userPanId,
        },
      });
      console.log("in repo", check.dataValues);
      return check;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }
}

module.exports = UsersRepository;
