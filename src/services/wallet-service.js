const { WalletRepository } = require("../repository/index");

class WalletService {
  constructor() {
    this.walletRepository = new WalletRepository();
  }

  //this function used in the user controller
  async createWallet(data) {
    try {
      const createWallet = await this.walletRepository.createWallet(data);
      return createWallet;
    } catch (error) {
      console.log("something went wrong in the wallet service");
      throw { error };
    }
  }

  async getWallet(userId) {
    try {
      const getWallet = await this.walletRepository.getWallet(userId);
      return getWallet;
    } catch (error) {
      console.log("something went wrong in the waller service");
      throw { error };
    }
  }
}

module.exports = WalletService;
