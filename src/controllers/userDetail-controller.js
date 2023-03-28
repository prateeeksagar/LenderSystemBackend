const { UserDetailService } = require("../services/index");

const userDetailService = new UserDetailService();

// const create = async (req, res) => {
//   try {
//     const detail = {
//       uid: req.body.id,
//       panId: req.body.panId,
//     };
//     const response = await userDetailService.createUserDetail(detail);
//     return res.status(200).json({
//       data: response,
//       success: true,
//       message: "successfully registered",
//       err: {},
//     });
//   } catch (error) {
//     return res.status(500).json({
//       data: {},
//       success: false,
//       message: "not able to register the user detail",
//       err: error,
//     });
//   }
// };

const update = async (req, res) => {
  try {
    const detail = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      aadharId: req.body.aadharId,
      mobileNo: req.body.mobileNo,
      EmpType: req.body.EmpType,
      address: req.body.address,
      postOffice: req.body.postOffice,
      city: req.body.city,
      pincode: req.body.pincode,
      District: req.body.District,
      state: req.body.state,
      bankAccountNumber: req.body.bankAccountNumber,
      ifscCode: req.body.ifscCode,
    };
    const response = await userDetailService.updateUserDetails(
      req.params.id,
      detail
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully registered",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to update the user detail",
      err: error,
    });
  }
};

module.exports = {
  update,
};
