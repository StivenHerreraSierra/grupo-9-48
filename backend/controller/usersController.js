const usersModel = require("../models/users");

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
                res.status(201).json({ "username": user.username });
            }

        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }

    static async update(req, res) {

        try {
            const username = req.params.username;
            const user = req.body;
            const usernameFilter = user.username ? user.username : username;
            let updatedUser = await usersModel.findOne({ "username": usernameFilter });                        
            if (updatedUser == null || updatedUser.username == username) {
                updatedUser = await usersModel.findOneAndUpdate({ "username": username }, user, { new: true });
                updatedUser.password = undefined;
                res.status(200).json(updatedUser)
            } else {
                res.status(403).json({ "message": `${updatedUser.username} is already in use` });
            }
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