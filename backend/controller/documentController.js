const documentModel = require("../models/documents");

module.exports = class DocumentController {
    static async getAll(req, res) {
        const username = req.params.username;

        if (username) {
            try {
                const user = await documentModel.findOne({ owner: username });

                res.status(200).json(user.documents);
            } catch (err) {
                res.status(400).json({ message: err.message });
            }
        }
    }

    static async insert(req, res) {
        const username = req.params.username;

        try {
            const title = req.body.title;

            //Como la función validateTitle es asíncrona y se necesita que termine de ejecutar para obtener el resultado, se usa await.
            if (await DocumentController.validateTitle(username, title)) {
                await documentModel.updateOne(
                    { owner: username },
                    {
                        $push: {
                            documents: {
                                title: title,
                                file: "/" + username + "/" + req.file.filename,
                                lastOpenDate: req.body.date,
                            },
                        },
                    }
                );

                res.status(201).json(title + " was added");
            } else {
                res.status(403).json({ "message": title + " is already in use" });
            }
        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }

    static async validateTitle(username, title) {
        const document = await documentModel.findOne({
            owner: username,
            "documents.title": title,
        });

        return document == null || document == undefined;
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
};
