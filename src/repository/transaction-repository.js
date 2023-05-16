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

  async transactionCount(userId) {
    try {
      const transactionCount = await Transaction.count({
        where: {
          userId: userId,
        },
      });
      return transactionCount;
    } catch (error) {
      console.log("something went wrong in the transaction count");
      throw { error };
    }
  }

  async getTransactions(userId, page) {
    try {
      // const page = 1;
      const limit = 5;
      const pageSize = 1;
      const offset = (page - 1) * limit;
      const getTransactions = await Transaction.findAll({
        where: {
          userId: userId,
        },
        offset: 5 * (page - 1),
        limit,
      });
      return getTransactions;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }

  async updateTransaction(userId, data) {
    try {
      const updateTransaction = await Transaction.update(data, {
        where: {
          userId: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }

  async updateTransactionBy_TxnId(txn_id, data) {
    try {
      const updateTransaction = await Transaction.update(data, {
        where: {
          id: txn_id,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }
}

module.exports = TransactionRepository;
