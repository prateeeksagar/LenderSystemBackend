const { AgentService } = require("../services/index");

const agentService = new AgentService();

const getAllAgents = async (_, res) => {
  try {
    const response = await agentService.getAllAgents();
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch agents",
      err: error,
    });
  }
};

module.exports = {
  getAllAgents,
};
