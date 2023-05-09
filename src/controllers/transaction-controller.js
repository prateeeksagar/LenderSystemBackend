const { TransactionService } = require("../services/index");

const transactionService = new TransactionService();

const createTransaction = async (req, res) => {
  try {
    const response = await transactionService.createTransaction(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "success transaction",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create the transaction",
      err: error,
    });
  }
};

const getTransactions = async (req, res) => {
  try {
    const response = await transactionService.getTransactions(req.query.userId);
    return res.status(200).json({
      data: response,
      success: true,
      message: "success transaction",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch the transactions",
      err: error,
    });
  }
};

module.exports = {
  createTransaction,
  getTransactions,
};
