const express = require("express");

const UsersController = require("../controller/usersController");
const Dictionary = require("../controller/dictionaryController");

const router = express.Router();

//Usuario
router.get("/users", UsersController.getAll);
router.get("/users/:username", UsersController.getById);
router.post("/users", UsersController.insert);
router.put("/users/:username", UsersController.update);
router.delete("/users/:username", UsersController.delete);

//Diciccionario
router.use("/dictionary/:word", Dictionary.search);

//Documento


module.exports = router;