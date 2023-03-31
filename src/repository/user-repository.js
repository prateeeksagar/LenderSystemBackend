const { User, Role } = require("../models/index");
const uniqid = require("uniqid");
class UsersRepository {
  #createFilter(data) {
    let filter = {};
  }

  async createUser(data) {
    try {
      const authrizationId = uniqid();
      const user = await User.create({
        // data
        ...data,
        authId: authrizationId,
      });
      const role = await Role.findByPk(2);
      await user.addRole(role);
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

  async getAllUser(filter) {
    try {
      if (filter) {
        const filterObject = this.#createFilter(filter);
        const users = await User.findAll({
          where: filterObject,
        });
        return users;
      }
      const users = await User.findAll();
      return users;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async getByEmail(emailId) {
    try {
      const check = await User.findOne({
        where: {
          emailId: emailId,
        },
      });
      console.log("in repo", check.dataValues);
      return check;
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }

  async isAdmin(userId) {
    try {
      const user = await User.findByPk(userId);
      const adminRole = await Role.findOne({
        where: {
          name: "ADMIN",
        },
      });
      console.log(adminRole);
      return user.hasRole(adminRole);
    } catch (error) {
      console.log("something went wrong in the user repo");
      throw { error };
    }
  }
}

module.exports = UsersRepository;
