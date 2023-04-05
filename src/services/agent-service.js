const { AgentRepository } = require("../repository/index");

class AgentService {
  constructor() {
    this.agentRepository = new AgentRepository();
  }

  async getAllAgents() {
    try {
      const agent = await this.agentRepository.getAllAgents();
      return agent;
    } catch (error) {
      console.log("something went wrong in the agent service");
      throw error;
    }
  }
}

module.exports = AgentService;
