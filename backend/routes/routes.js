const express = require("express");

const UsersController = require("../controller/usersController");
const Dictionary = require("../controller/dictionaryController");

const router = express.Router();

const fs = require("fs");
const path = require("path");
const multer = require("multer");

//Configuración para cargar archivos.
const userModel = require("../models/users");
const RESOURCES_PATH = path.join(path.dirname(__dirname), "resources"); //Ruta hacia los recursos del proyecto.
// Configuración de multer.
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        fs.mkdir(
            path.join(RESOURCES_PATH, req.params.username),
            {recursive: true},
            (err) => (err) ? console.log("Error: ", err) : console.log("Uploaded")
        );

        cb(null, path.join(RESOURCES_PATH, req.params.username));
    },
    filename: (req, file, cb) => {
        cb(null, req.params.username + "-image-" + Date.now());
    }
});

const upload = multer({ storage: storage });
//----------------------------------------------------

//Usuario
router.get("/users", UsersController.getAll);
router.get("/users/:username", UsersController.getByUsername);
router.post("/users", UsersController.insert);
router.put("/users/:username", UsersController.update);
router.delete("/users/:username", UsersController.delete);
router.put("/users/admin/:username", upload.single('picture'), (req, res) => {
    userModel.updateOne(
        {"username": req.params.username},
        {"picture": fs.readFileSync(path.join(RESOURCES_PATH, req.params.username, req.file.filename))},
        (err, user) => {
            if(err) res.status(400).json({"message": err.message});
            else res.status(201).json(user);
        }
    );
});

//Diciccionario
router.use("/dictionary/:word", Dictionary.search);

//Documento


module.exports = router;