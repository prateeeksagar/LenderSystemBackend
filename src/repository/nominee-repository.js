const { Nominee } = require("../models/index");

class NomineeRepository {
  async createNominee(data) {
    try {
      const createNominee = await Nominee.create(data);
      return createNominee;
    } catch (error) {
      console.log("something went wrong in createdNominee in nominee_repo");
      throw { error };
    }
  }
}

module.exports = NomineeRepository;
