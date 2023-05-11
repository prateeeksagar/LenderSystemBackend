const {
  InvestmentService,
  PlanService,
  WalletService,
  TransactionService,
} = require("../services/index");

const investmentService = new InvestmentService();
const planService = new PlanService();
const transactionService = new TransactionService();

const walletService = new WalletService();

const create = async (req, res) => {
  try {
    // const UserId = req.body.uid;
    const response = await investmentService.createInvestment(req.body.uid);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully created",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create the investment table",
      err: error,
    });
  }
};

const Invest = async (req, res) => {
  try {
    console.log("started-------");
    const plan = await planService.getPlan(req.body.planId);
    console.log("started-------2");
    const checkWalletAmount = await walletService.getWallet(req.query.userId);
    console.log("started-------3");
    // check that plan minimum amount value should get satisfied
    if (
      plan.minimumInvestmentAmount > req.body.amount &&
      checkWalletAmount.amount < req.body.amount
    ) {
      return res.status(308).json({
        data: {},
        success: false,
        message: "add more money in the wallet",
        err: "not have enough money in the wallet",
      });
    }
    //now wallet have enough money
    //money locked
    const lockedAmount = checkWalletAmount.amount - req.body.amount;
    const availableAmount = checkWalletAmount.amount - lockedAmount;
    const lockdata = {
      locked: lockedAmount,
      amount: availableAmount,
    };
    //now amount get locked
    await walletService.updateWallet(req.query.userId, lockdata);
    //fist create a transaction in transaction table
    const txn_Data = {
      userId: req.query.userId,
      txn_type: "Plan Purchasing",
      flowType: "debit",
      amount: req.body.amount,
      txn_status: "pending",
    };
    const createTransaction = await transactionService.createTransaction(
      txn_Data
    );
    //investment table entry
    const invest_data = {
      userId: req.query.userId,
      PlanId: req.body.planId,
      amount_Invested: req.body.amount,
      opt_status: "N",
    };
    console.log("invest 1");
    await investmentService.createInvestment(invest_data);
    //now investment done.Now, update the wallet by removing locked amount
    const updateLockedData = { locked: 0 };
    await walletService.updateWallet(req.query.userId, updateLockedData);
    //removed the locked amount
    console.log("invest 2");
    const txn_data = { txn_type: "Plan Purchased", txn_status: "success" };
    await transactionService.updateTransaction(req.query.userId, txn_data);

    return res.status(200).json({
      data: {},
      success: true,
      message: "Successfully purchased the plan",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to invest",
      err: error,
    });
  }
};
module.exports = {
  create,
  Invest,
};
