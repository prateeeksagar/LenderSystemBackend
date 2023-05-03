const { WalletService } = require("../services/index");

const walletService = new WalletService();
const getWallet = async (req, res) => {
  try {
    console.log(req.body);
    const response = await walletService.getWallet(req.body.userId);
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

module.exports = {
  getWallet,
};
