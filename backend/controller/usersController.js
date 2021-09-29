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
            const Newuser = await usersModel.create(user);
            res.status(201).json(Newuser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }

    }

    static async update(req, res) {

        try {
            const username = req.params.username;
            const user = req.body;
            const Newuser = await usersModel.updateOne({ "username": username }, user);
            res.status(200).json(Newuser);
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
}