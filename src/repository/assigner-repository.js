const { sequelize } = require("../models/index");

class assignerRepository {
  async assignAgent(userId, agentId) {
    try {
      const [agent, metadata] = await sequelize.query(
        `update UserDetails SET assignedAgentId = ${agentId} where userId = ${userId};`
      );
      return agent;
    } catch (error) {
      console.log("something went wrong in the assigner repo");
      throw error;
    }
  }

  
}

module.exports = assignerRepository;
