const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    "username": String,
    "password": String,
    "picture": Buffer,
    "documents": Array
});


module.exports = mongoose.model("user", userSchema);
