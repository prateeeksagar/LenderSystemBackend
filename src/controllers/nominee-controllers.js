const { NomineeService } = require("../services/index");

const nomineeService = new NomineeService();
const createNominee = async (req, res) => {
  try {
    const userId = req.query.userId;
    const data = {
      userId,
      ...req.body,
    };
    console.log(data);
    const response = await nomineeService.createNominee(data);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully created the nominee",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to create nominee",
      err: error,
    });
  }
};

module.exports = {
  createNominee,
};
