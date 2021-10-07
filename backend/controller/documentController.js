const documentModel = require("../models/document");

module.exports = class DocumentController {
    static async getAll(req, res) {
        const username = req.params.username;

        if (username) {
            try {
                const user = await documentModel.findOne({ "owner": username });
                res.status(200).json(user.documents);
            } catch (err) {
                if (err.response == null)
                    res.status(200).json(err.response);
                else
                    res.status(400).json(err);
            }
        }
    }

    static async updateOwner(req, res) {

        try {
            const username = req.params.username;
            const newOwner = req.body;
            await documentModel.findOneAndUpdate({ "owner": username }, newOwner);
            res.status(200).json(newOwner);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }
}