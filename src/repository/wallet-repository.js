const { wallet, sequelize } = require("../models/index");

class WalletRepository {
  async createWallet(data) {
    try {
      const createWallet = await wallet.create(data);
      return createWallet;
    } catch (error) {
      console.log("something went wroong in thr wallet repo");
      throw error;
    }
  }

  async getWallet(userId) {
    try {
      const getWallet = await wallet.findOne({
        where: {
          userId: userId,
        },
      });
      return getWallet;
    } catch (error) {
      console.log("something went wroong in thr wallet repo");
      throw error;
    }
  }

  async addAmount(userId, amount) {
    try {
      const addAmount = await wallet.increment("amount", {
        by: amount,
        where: { userId: userId },
      });
      return addAmount;
    } catch (error) {
      console.log("something went wrong in the wallet addAmount");
      throw error;
    }
  }

  async deductAmount(userId, amount) {
    try {
      const deductAmount = await wallet.decrement("amount", {
        by: amount,
        where: { userId: userId },
      });
      return deductAmount;
    } catch (error) {
      console.log("something went wrong in the wallet addAmount");
      throw error;
    }
  }
}

module.exports = WalletRepository;
