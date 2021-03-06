const usersModel = require("../models/users");
const FileUtil = require("../models/utilities/FileUtil");
const DocumentsController = require("../controller/documentController");

module.exports = class UsersController {

    static async getAll(req, res) {

        try {
            const users = await usersModel.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(404).json({ message: err.message });
        }

    }

    static async getByUsername(req, res) {

        const username = req.params.username;

        try {
            const user = await usersModel.findOne({ "username": username });
            if (user != null) {
                user.password = undefined;
                res.status(200).json(user);
            } else {
                res.status(404).json();
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }


    static async insert(req, res) {

        try {
            const user = req.body;

            let newUser = await usersModel.findOne({ "username": user.username });

            if (newUser != null) {
                res.status(403).json({ "message": `${user.username} is already in use` });
            } else {
                newUser = await usersModel.create(user);
                const dir = "./resources/" + user.username;
                if (!FileUtil.exists(dir)) {
                    DocumentsController.insert(user.username);
                    FileUtil.mkdir(dir);
                    console.log("Creó un directorio");
                }
                res.status(201).json({ "username": user.username });
            }

        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }

    static async updateUser(req, res) {

        try {
            const username = req.params.username;
            const newUserName = req.body;
            let updatedUser = await usersModel.findOne({ "username": newUserName.username });
            if (updatedUser == null) {
                updatedUser = await usersModel.findOneAndUpdate({ "username": username }, newUserName, { new: true });
                FileUtil.renameUserFolder(username, updatedUser.username);
                res.status(200).json({ "username": updatedUser.username });
            } else
                res.status(403).json({ "message": `${updatedUser.username} is already in use` });

        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }

    static async updateUserPicture(req, res) {

        try {
            const username = req.params.username;
            const image = req.file.filename;
            const updatedUser = await usersModel.findOneAndUpdate({ "username": username }, { "picture": image }, { new: true });
            res.status(200).json(updatedUser.picture);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }

    static async delete(req, res) {

        try {
            const username = req.params.username;
            await usersModel.deleteOne({ "username": username });
            res.status(200).json();
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }

    static async validateUser(req, res) {

        try {
            const userCredentials = req.body;
            let user = await usersModel.findOne({ "username": userCredentials.username });

            if (user != null) {
                if (userCredentials.password == user.password) {
                    res.status(200).json({ "username": user.username });
                } else {
                    res.status(403).json({ "message": "Wrong password" });
                }

            } else {
                res.status(400).json({ "message": "Wrong credentials" });
            }

        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }
}