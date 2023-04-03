const express = require("express");

const userController = require("../../controllers/user-controller");
const userDetailController = require("../../controllers/userDetail-controller");
const investmentController = require("../../controllers/investment-controller");

const { AuthRequestValidator } = require("../../middlewares/index");
const router = express.Router();

// these apis for do changes in the user table

router.delete("/user/:id", userController.destroy);
router.get("/user/:id", userController.get);
router.get("/user", userController.getAll);
router.patch("/user/:id", userController.update);

//Api for signin and signup in the application
router.post(
  "/signup",
  AuthRequestValidator.validateUserAuth,
  userController.create
);
router.post("/signin", userController.signIn);

//api to check that the user is authenticated
router.get("/isAuthenticated", userController.isAuthenticated);

// this api only for registration(KYC)
router.patch("/register/:id", userDetailController.update);

//for investment table
router.post("/investment", investmentController.create);

//this api to check that the user is admin or not [NOT IN USE]
router.get("/isAdmin", userController.isAdmin);

module.exports = router;

/*
firstName
lastName
emailId
aadharId
mobileNo
EmpType
address
postOffice
city
pincode
District
state
bankAccountNumber
ifscCode
createdAt
createdBy
updatedAt
updatedBy
isDeleted
*/
