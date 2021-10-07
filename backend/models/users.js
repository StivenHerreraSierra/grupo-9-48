const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "username": String,
    "password": String,
    "picture": String
});


module.exports = mongoose.model("user", userSchema);
