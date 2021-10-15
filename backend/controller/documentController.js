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
                if (user != null)
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

        if (username) {
            try {
                const title = req.params.title;
                const user = await documentModel.findOne({ owner: username });

                const documents = user.documents.filter(item => item.title.startsWith(title));

                res.status(200).json(documents);
            } catch (err) {
                res.status(500).json({ "message": err.message });
            }
        }
    }

    static async getLastDocuments(req, res) {
        console.log("últimos");
        const username = req.params.username;

        if (username) {
            try {
                const user = await documentModel.findOne({ owner: username });

                const documents = user.documents.slice(-5);

                res.status(200).json(documents);
            } catch (err) {
                res.status(500).json({ "message": err.message });
            }
        }
    }

    static async insert(username) {
        console.log("Insert")
        try {
            await documentModel.create({ owner: username, documents: [] });
        } catch (err) {
            console.error(err.message);
        }
    }

    static async insertDocument(req, res) {
        console.log("Insert document")
        const username = req.params.username;

        try {
            const title = req.body.title;
            let filename = req.file.filename
            //Como la función validateTitle es asíncrona y se necesita que termine de ejecutar para obtener el resultado, se usa await.
            
            const checkTitle = await DocumentController.validateTitle(username, title, filename);

            if (checkTitle == 0) {

                await documentModel.updateOne(
                    { owner: username },
                    {
                        $push: {
                            documents: {
                                title: title,
                                file: "/" + username + "/" + filename,
                                lastOpenDate: req.body.date,
                            },
                        },
                    }
                );

                res.status(201).json(title + " was added");
            } else {
                filename = filename.substring("file_".length);
                const errorMessage = checkTitle == 1 ? `${title} is already in use` : `${filename} already exists`;
                res.status(403).json({ "message": errorMessage });
            }

        } catch (error) {
            res.status(400).json({ "message": error.message });
        }
    }

    static async validateTitle(username, title, filename) {
        console.log("Validate");
        const user = await documentModel.findOne({ owner: username });

        if (user == null)
            return 0;

        for (let index = 0; index < user.documents.length; index++) {

            if (title != "" && user.documents[index].title.includes(title))
                return 1;
            if (user.documents[index].file.includes(filename))
                return 2;
        }

        return 0;
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

    static async updateDocumentsInfo(req, res) {

        try {
            const owner = req.params.username;
            const documents = req.body.documents;
            const fileName = req.body.fileDeleted;
            if (fileName != "")
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
