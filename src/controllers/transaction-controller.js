const { TransactionService } = require("../services/index");
const fs = require("fs");
const path = require("path");
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
    const response = await transactionService.getTransactions(
      req.query.userId,
      req.query.page
    );
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

const transactionCount = async (req, res) => {
  try {
    const response = await transactionService.transactionCount(
      req.query.userId
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully sent",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able count the transaction",
      err: error,
    });
  }
};

const dateBasedTransaction = async (req, res) => {
  try {
    const response = await transactionService.dateBasedTransaction(
      req.query.userId,
      req.query.day
    );
    console.log(__dirname);
    return res
      .status(200)
      .sendFile("/home/prateeksagar/LenderSystemBackend/webpage.pdf");
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to fetch the details",
      err: error,
    });
  }
};

const sendTransactionToMail = async (req, res) => {
  try {
    await transactionService.sendTransactionToMail(
      req.query.userId,
      req.query.day
    );
    return res.status(200).json({
      message: "Email sent successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "failed to send Email",
      err: error,
    });
  }
};
module.exports = {
  createTransaction,
  getTransactions,
  transactionCount,
  dateBasedTransaction,
  sendTransactionToMail,
};
