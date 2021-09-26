const express = require("express");

const UsersController = require("../controller/usersController");

const router = express.Router();

router.get("/users", UsersController.getAll);
router.get("/users/:username", UsersController.getById);
router.post("/users", UsersController.insert);
router.put("/users/:username", UsersController.update);
router.delete("/users/:username", UsersController.delete);


module.exports = router;