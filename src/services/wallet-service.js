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
      console.log("something went wrong in the wallet service");
      throw { error };
    }
  }

  async addAmount(userId, amount) {
    try {
      const addAmount = await this.walletRepository.addAmount(userId, amount);
      return addAmount;
    } catch (error) {
      console.log("something went wrong in the wallet service");
      throw { error };
    }
  }

  async deductAmount(userId, amount) {
    try {
      const deductAmount = await this.walletRepository.deductAmount(
        userId,
        amount
      );
      return deductAmount;
    } catch (error) {
      console.log("something went wrong in the wallet service");
      throw { error };
    }
  }

  async updateWallet(userId, data) {
    try {
      await this.walletRepository.updateWallet(userId, data);
      return true;
    } catch (error) {
      console.log("something went wrong in the wallet service");
      throw { error };
    }
  }
}

module.exports = WalletService;
