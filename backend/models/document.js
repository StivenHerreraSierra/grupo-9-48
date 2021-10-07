const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
    "owner": String,
    "documents": Array
});

module.exports = mongoose.model("documents", documentSchema);