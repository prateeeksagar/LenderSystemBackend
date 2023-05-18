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
      const data = await wallet.increment("amount", {
        by: amount,
        where: { userId: userId },
      });
      return data;
    } catch (error) {
      console.log("something went wrong in the wallet addAmount");
      throw error;
    }
  }

  async deductAmount(userId, amount) {
    try {
      const check = await wallet.findOne({
        where: {
          userId: userId,
        },
      });
      if (check.amount >= amount) {
        const deductAmount = await wallet.decrement("amount", {
          by: amount,
          where: { userId: userId },
        });
        return deductAmount;
      }
      return false;
    } catch (error) {
      console.log("something went wrong in the wallet addAmount");
      throw error;
    }
  }

  async updateWallet(userId, data) {
    try {
      await wallet.update(data, {
        where: {
          userId: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("something went wrong in the wallet addAmount");
      throw error;
    }
  }
}

module.exports = WalletRepository;
