const { WalletService, TransactionService } = require("../services/index");
const transactionService = new TransactionService();
const walletService = new WalletService();
const getWallet = async (req, res) => {
  try {
    console.log("-------------", req.query);
    const response = await walletService.getWallet(req.query.userId);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully wallet details",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed to fetch wallet details",
      err: error,
    });
  }
};

const addAmount = async (req, res) => {
  try {
    const transaction_data = {
      userId: req.query.userId,
      amount: req.body.amount,
      txn_type: req.body.txn_type,
      flowType: req.body.flowType,
      balance: 0,
    };
    const transaction = await transactionService.createTransaction(
      transaction_data
    );
    const response = await walletService.addAmount(
      req.query.userId,
      req.body.amount
    );

    const walletBalance = await walletService.getWallet(req.query.userId);
    console.log("this is response", walletBalance.amount);
    if (!response) {
      const data = { txn_status: "failed" };
      await transactionService.updateTransactionBy_TxnId(transaction.id, data);
    }
    const walletAmount = walletBalance.amount;
    const data = { txn_status: "success", balance: walletAmount };
    console.log(data);
    await transactionService.updateTransactionBy_TxnId(transaction.id, data);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully added  amount in the wallet",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed to add amount in wallet",
      err: error,
    });
  }
};

const deductAmount = async (req, res) => {
  try {
    const transaction_data = {
      userId: req.query.userId,
      amount: req.body.amount,
      txn_type: req.body.txn_type,
      flowType: req.body.flowType,
    };
    const transaction = await transactionService.createTransaction(
      transaction_data
    );
    const response = await walletService.deductAmount(
      req.query.userId,
      req.body.amount
    );
    if (!response) {
      data = { txn_status: "failed" };
      await transactionService.updateTransactionBy_TxnId(transaction.id, data);
      return res.status(500).json({
        data: {},
        success: false,
        message: "Enter amount less than available amount",
        err: "withdrawl amount is greater than available amount",
      });
    }
    const walletAmount = await walletService.getWallet(req.query.userId);
    data = { txn_status: "success", balance: walletAmount.amount };
    await transactionService.updateTransactionBy_TxnId(transaction.id, data);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deducted  amount in the wallet",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed to deduct amount in wallet",
      err: error,
    });
  }
};

module.exports = {
  getWallet,
  addAmount,
  deductAmount,
};
