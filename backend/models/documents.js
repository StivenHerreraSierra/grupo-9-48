const mongoose = require("mongoose");

const documentSchema = mongoose.Schema({
    "owner": String,
    "documents": []
});

module.exports = mongoose.model("documents", documentSchema);