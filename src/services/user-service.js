const jwt = require("jsonwebtoken");

const { UserRepository } = require("../repository/index");

const { JWT_KEY } = require("../config/serverConfig");
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

  async signIn(userPanId, password) {
    console.log(userPanId, password);
    try {
      const check = await this.userRepository.getByPan(userPanId);
      console.log("it is in the service", check.dataValues);
      if (password != check.password) {
        console.log("password is not matching");
        throw { error: "Incorrect Password" };
      }

      //if password matches
      const newJWT = this.createToken({
        panId: check.panId,
        uid: check.uid,
      });
      console.log(newJWT);
      return newJWT;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in the user service");
      throw { error };
    }
  }

  async createToken(user) {
    try {
      const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
      return result;
    } catch (error) {
      console.log("something went wrong in the user service");
      throw { error };
    }
  }

  async verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("something went wrong in verify token");
      throw { error };
    }
  }
}

module.exports = UserSerivce;
