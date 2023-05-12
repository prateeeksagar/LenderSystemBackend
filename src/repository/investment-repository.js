const { Investment } = require("../models/index");

class InvestmentRepository {
  async createInvestment(data) {
    try {
      const createInvestment = await Investment.create(data);
      return createInvestment;
    } catch (error) {
      console.log("something went wrong in the investment repo");
      throw error;
    }
  }

  async getByUserId(uid) {
    try {
      const getInvestmentDetail = await Investment.findOne({
        where: {
          userId: uid,
        },
      });
      return getInvestmentDetail;
    } catch (error) {
      console.log("something went wrong in the investment repo");
      throw error;
    }
  }

  async updateInvestment(userId, data) {
    try {
      const updateInvestment = await Investment(data, {
        where: {
          userId: userId,
        },
      });
      return updateInvestment;
    } catch (error) {
      console.log("something went wrong in the investment repo");
      throw error;
    }
  }
}

module.exports = InvestmentRepository;
