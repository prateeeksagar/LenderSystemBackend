const express = require("express");

const userController = require("../../controllers/user-controller");

const router = express.Router();

// user API

router.post("/user", userController.create);
router.delete("/user/:id", userController.destroy);
router.get("/user/:id", userController.get);
router.get("/user", userController.getAll);
router.patch("/user/:id", userController.update);

module.exports = router;
