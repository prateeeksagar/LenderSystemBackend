const { create } = require("../controllers/user-controller");
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
}

module.exports = TransactionService;
