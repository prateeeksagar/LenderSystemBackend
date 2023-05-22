const { NomineeRepository } = require("../repository/index");

class NomineeService {
  constructor() {
    this.nomineeRepository = new NomineeRepository();
  }

  async createNominee(data) {
    try {
      const createNominee = await this.nomineeRepository.createNominee(data);
      return createNominee;
    } catch (error) {
      console.log(
        "something went wrong in the createnominee in nominee service"
      );
      throw { error };
    }
  }
}

module.exports = NomineeService;
