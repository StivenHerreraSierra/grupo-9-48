const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "username": String,
    "password": String,
    "picture": String,
    "documents": Array
});


module.exports = mongoose.model("user", userSchema);
