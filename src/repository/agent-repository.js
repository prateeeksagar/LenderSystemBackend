const { User, sequelize, Role } = require("../models/index");
const uniqid = require("uniqid");
class agentRepository {
  async getAllAgents() {
    try {
      const [agent, metadata] = await sequelize.query(
        "select * from Users Where uid in  (select UserUid from User_Roles where RoleId = 3);"
      );
      return agent;
    } catch (error) {
      console.log("something went wrong in the agent repo");
      throw error;
    }
  }

  async createAgent(data) {
    try {
      const authrizationId = uniqid();

      const user = await User.create({
        ...data,
        authId: authrizationId,
      });
      const role = await Role.findByPk(3);
      await user.addRole(role);
      return user;
    } catch (error) {
      console.log("something went wrong in the agent repository");
      throw { error };
    }
  }

  async updateAgent(userId, data) {
    try {
      const user = await User.update(data, {
        where: { uid: userId },
      });
      return user;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in the agent repo");
      throw { error };
    }
  }
}

module.exports = agentRepository;
