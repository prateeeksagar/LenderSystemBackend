const { UserService } = require("../services/index");
const { UserDetailService, InvestmentService } = require("../services/index");
const userService = new UserService();
const userDetailService = new UserDetailService();
const investmentService = new InvestmentService();
const create = async (req, res) => {
  try {
    const data = {
      panId: req.body.panId,
      password: req.body.password,
    };
    const user = await userService.createUser(data);
    const detail = {
      userId: user.uid,
      panId: user.panId,
    };
    // console.log(user);
    await userDetailService.createUserDetail(detail);
    await investmentService.createInvestment(detail.userId);
    return res.status(201).json({
      data: user,
      success: true,
      message: "successfully created the user",
      err: {},
    });
  } catch (error) {
    console.log(error);
    console.log("something went wrong in user-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to to sign up",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await userService.deleteUser(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully deleted the user",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in user-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the user",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await userService.updateUser(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully updated the user",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in user-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to update the user",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await userService.getUser(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "successfully fetched the user",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in user-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fetch the user",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const users = await userService.getAllUser();
    return res.status(200).json({
      data: users,
      success: true,
      message: "successfully fetched the users",
      err: {},
    });
  } catch (error) {
    console.log("something went wrong in user-controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get all the user",
      err: error,
    });
  }
};

const signIn = async (req, res) => {
  try {
    const response = await userService.signIn(
      req.body.panId,
      req.body.password
    );
    return res.status(200).json({
      success: true,
      data: response,
      err: {},
      message: "successfully signed In",
    });
  } catch (error) {
    return res.status(500).json({
      message: "not able to sign in",
      success: false,
      err: error,
    });
  }
};

const isAuthenticated = async (req, res) => {
  try {
    const token = req.headers["x-access-token"];
    const response = await userService.isAuthenticated(token);
    return res.status(200).json({
      success: true,
      err: {},
      data: response,
      message: "user is authenticated and the token is valid",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "something went wrong in the isAuth",
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll,
  signIn,
  isAuthenticated,
};
