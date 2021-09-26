const express = require("express");
const Dictionary = require("../controller/dictionaryController");

const router = express.Router();

router.use("/dictionary/:word", Dictionary.search);

module.exports = router;