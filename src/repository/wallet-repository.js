const { wallet } = require("../models/index");

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
        where : {
          userId : userId
        }
      })
      return getWallet;
    } catch (error) {
      console.log("something went wroong in thr wallet repo");
      throw error;
    }
  }
}

module.exports = WalletRepository;
