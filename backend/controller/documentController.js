const documentModel = require("../models/document");

module.exports = class DocumentController {
    static async getAll(req, res) {
        const username = req.params.username;

        if(username) {
            try {
                const user = await documentModel.findOne({"owner": username});

                res.status(200).json(user.documents);
            } catch(err) {

            }
        }
    }
}