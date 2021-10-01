const usersModel = require("../models/users");
const usersController = require("./usersController");

module.exports = class DocumentController {
    static async getAll(req, res) {
        const username = req.params.username;

        if(username) {
            try {
                const user = await usersModel.findOne({"username": username});

                res.status(200).json(user.documents);
            } catch(err) {

            }
        }
    }
}