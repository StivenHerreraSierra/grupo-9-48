const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
    "title": String,
    "file": Binary,
    "lastOpenDate": Date,
    "lastOpenTime": Date,
    "coverImage": Binary
});

module.exports = mongoose.model("document", documentSchema);