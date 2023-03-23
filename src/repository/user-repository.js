const { User } = require("../models/index");

class UsersRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async deleteUser(userId) {
    try {
      const user = await User.destry({
        where: { id: userId },
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
          id: userId,
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
}

module.exports = UsersRepository;
