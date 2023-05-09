const { Transaction } = require("../models/index");

class TransactionRepository {
  async createTransaction(data) {
    try {
      const createInvestment = await Transaction.create(data);
      return createInvestment;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }
  async getTransactions(userId) {
    try {
      const getTransactions = await Transaction.findAll({
        where: {
          userId: userId,
        },
      });
      return getTransactions;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }
}

module.exports = TransactionRepository;
