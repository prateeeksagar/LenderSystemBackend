const express = require("express");

const userController = require("../../controllers/user-controller");
const userDetailController = require("../../controllers/userDetail-controller");

const router = express.Router();

// these apis for do changes in the user table

router.delete("/user/:id", userController.destroy);
router.get("/user/:id", userController.get);
router.get("/user", userController.getAll);
router.patch("/user/:id", userController.update);

//Api for signin and signup in the application
router.post("/signup", userController.create);
router.post("/signin", userController.signIn);

// this api only for registration
router.patch("/register/:id", userDetailController.update);

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
