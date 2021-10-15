const documentModel = require("../models/documents");
const FileUtil = require("../models/utilities/FileUtil");

module.exports = class DocumentController {
    static async getAll(req, res) {
        console.log("Get all")

        const username = req.params.username;

        /*const users = await documentModel.find();
            res.status(200).json(users);*/

        if (username) {
            try {
                const user = await documentModel.findOne({ owner: username });
                if(user!=null)
                    res.status(200).json(user.documents);
                else
                res.status(200).json([]);
            } catch (err) {
                res.status(400).json({ message: err.message });
            }
        }
    }

    static async getByTitle(req, res) {
        console.log("titulo");
        
        const username = req.params.username;

        if(username) {
            try {
                const title = req.params.title;
                const user = await documentModel.findOne({ owner: username });

                const documents = user.documents.filter(item => item.title.startsWith(title));

                res.status(200).json(documents);
            } catch(err) {
                res.status(500).json({"message": err.message});
            }
        }
    }

    static async getLastDocuments(req, res) {
        console.log("últimos");
        const username = req.params.username;

        if(username) {
            try {
                const user = await documentModel.findOne({ owner: username });

                const documents = user.documents.slice(-5);

                res.status(200).json(documents);
            } catch(err) {
                res.status(500).json({"message": err.message});
            }
        }
    }

    static async insert(username) {
        console.log("Insert")
        try {
            await documentModel.create({owner: username, documents: []});
        } catch(err) {
            console.error(err.message);
        }
    }

    static async insertDocument(req, res) {
        console.log("Insert document")
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
        console.log("Validate")
        const document = await documentModel.findOne({
            owner: username,
            "documents.title": title,
        });

        return document == null || document == undefined;
    }

    static async updateOwner(req, res) {
        console.log("Update")

        try {
            const username = req.params.username;
            const newOwner = req.body;
            await documentModel.findOneAndUpdate({ "owner": username }, newOwner);
            res.status(200).json(newOwner);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }

    //eliminar insertOwner
    /*
    static async insertOwner(req, res) {

        try {
            const username = req.params.username;
            const owner = {
                "owner": username,
                "documents": []
            };
            await documentModel.create(owner);
            res.status(201).json(owner);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }

    }
    */

    static async deleteDocument(req, res) {
        console.log("Delete")

        try {
            const owner = req.params.username;
            const documents = req.body.documents;
            const fileName = req.body.fileDeleted;
            FileUtil.deleteDocument(fileName);
            await documentModel.findOneAndUpdate({ "owner": owner }, { "documents": documents });
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async deleteOwner(req, res) {
        console.log("Delete owner")

        try {
            const username = req.params.username;
            await documentModel.deleteOne({ "owner": username });
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
};
