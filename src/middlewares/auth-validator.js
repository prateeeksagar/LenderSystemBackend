const validateUserAuth = (req, res, next) => {
  if (!req.body.panId) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: "Pan id missing in the sign process",
    });
  }
  if (!req.body.password) {
    return res.status(400).json({
      success: false,
      data: {},
      message: "something went wrong",
      err: " Password missing in the sign process",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
};
