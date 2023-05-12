const { TransactionRepository } = require("../repository/index");

class TransactionService {
  constructor() {
    this.transactionRepository = new TransactionRepository();
  }

  async createTransaction(data) {
    try {
      const createTransacation =
        await this.transactionRepository.createTransaction(data);
      return createTransacation;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }

  async getTransactions(userId) {
    try {
      const getTransactions = await this.transactionRepository.getTransactions(
        userId
      );
      return getTransactions;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }

  async updateTransaction(txn_Id, data) {
    try {
      const updateTransaction =
        await this.transactionRepository.updateTransaction(txn_Id, data);
      return true;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }

  async updateTransactionBy_TxnId(txn_Id, data) {
    try {
      const updateTransaction =
        await this.transactionRepository.updateTransactionBy_TxnId(
          txn_Id,
          data
        );
      return true;
    } catch (error) {
      console.log("something went wrong in the transaction table");
      throw { error };
    }
  }
}

module.exports = TransactionService;
