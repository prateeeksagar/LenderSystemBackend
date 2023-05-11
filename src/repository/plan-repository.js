const { Plan } = require("../models/index");

class PlanRepository {
  async getPlans() {
    try {
      const plans = await Plan.findAll();
      return plans;
    } catch (error) {
      console.log("something went wrong in the plan repo");
      throw { error };
    }
  }

  async getPlan(planId) {
    try {
      const plan = await Plan.findOne({
        where: {
          id: planId,
        },
      });
      return plan;
    } catch (error) {
      console.log("something went wrong in the plan repo");
      throw { error };
    }
  }
}

module.exports = PlanRepository;
