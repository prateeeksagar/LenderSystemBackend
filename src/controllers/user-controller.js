const { UserService } = require("../services/index");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    return res.status(201).json({
      data: user,
      success: true,
      message: "successfully created the city",
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

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll,
};
