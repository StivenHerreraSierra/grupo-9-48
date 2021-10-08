const documentModel = require("../models/documents");

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

    static async insert(req, res) {
        const username = req.params.owner;

            try {
                if(username) {
                await documentModel.updateOne(
                    { owner: username },
                    { $push:
                        {
                            documents: {
                                "title": req.body.title,
                                "file": "/" + req.file.filename,
                                "lastOpenDate": req.body.date
                            }
                        }
                    }
                );

                res.status(201).json();
                }

                res.status(404).json();
            } catch(error) {
                res.status(400).json({ message: error.message });
            }
    }
}