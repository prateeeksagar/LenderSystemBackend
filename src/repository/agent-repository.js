const { sequelize } = require("../models/index");

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
}

module.exports = agentRepository;
