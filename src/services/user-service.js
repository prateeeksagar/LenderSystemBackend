const { UserRepository } = require("../repository/index");

class UserSerivce {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const response = await this.userRepository.createUser(data);
      return response;
    } catch (error) {
      console.log("something went wrong in the user service");
      throw { error };
    }
  }

  async deleteUser(userId) {
    try {
      const response = await this.userRepository.deleteUser(userId);
      return response;
    } catch (error) {
      console.log("something went wrong int user service");
      throw { error };
    }
  }

  async updateUser(userId, data) {
    try {
      const response = await this.userRepository.updateUser(userId, data);
      return response;
    } catch (error) {
      console.log("something went wrong int user service");
      throw { error };
    }
  }

  async getUser(userId) {
    try {
      const response = await this.userRepository.getUser(userId);
      return response;
    } catch (error) {
      console.log("something went wrong int user service");
      throw { error };
    }
  }

  async getAllUser() {
    try {
      const response = await this.userRepository.getAllUser();
      return response;
    } catch (error) {
      console.log("something went wrong int user service");
      throw { error };
    }
  }
}

module.exports = UserSerivce;
