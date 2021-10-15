const express = require("express");

const UsersController = require("../controller/usersController");
const Dictionary = require("../controller/dictionaryController");
const DocumentsController = require("../controller/documentController");
const FileUtil = require("../models/utilities/FileUtil");

const router = express.Router();

const fs = require("fs");
const path = require("path");

//Configuración para cargar archivos.
const userModel = require("../models/users");
const RESOURCES_PATH = path.join(path.dirname(__dirname), "resources"); //Ruta hacia los recursos del proyecto.
// Configuración de multer.

const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const dir = "./resources/" + req.params.username;
        callback(null, dir);
    },
    filename: (req, file, callback) => {
        const extension = FileUtil.getExtension(file.originalname);
        if (extension === 'pdf') {
            if (DocumentsController.validateTitle(req.params.username, req.body.title)) {
                callback(null, "file_" + req.body.title.replace(/\s/g, "") + "." + extension);
            }
        } else {
            callback(null, "picture");
        }
    }
});

const upload = multer({ storage: storage });
//----------------------------------------------------

//Usuario
router.get("/users", UsersController.getAll);
router.get("/users/:username", UsersController.getByUsername);
router.post("/users", UsersController.insert);
router.put("/users/:username",  UsersController.updateUser);
router.patch("/users/picture/:username", upload.single("picture"),  UsersController.updateUserPicture);
router.delete("/users/:username", UsersController.delete);
router.post("/users/validation", UsersController.validateUser);
/*router.put("/users/admin/:username", upload.single('picture'), (req, res) => {
    userModel.updateOne(
        {"username": req.params.username},
        {"picture": fs.readFileSync(path.join(RESOURCES_PATH, req.params.username, req.file.filename))},
        (err, user) => {
            if(err) res.status(400).json({"message": err.message});
            else res.status(201).json(user);
        }
    );
});*/

//Diccionario
router.use("/dictionary/:word", Dictionary.search);

//Documento
//router.post("/user/documents/insertowner/:username", DocumentsController.insertOwner);
router.get("/user/documents/:username", DocumentsController.getAll);
router.get("/user/documents/:username/:title", DocumentsController.getByTitle);
router.get("/user/documents/:username/last/get", DocumentsController.getLastDocuments);
router.put("/user/documents/upload/:username", upload.single("file"), DocumentsController.insertDocument);
router.put("/user/documents/updateowner/:username", DocumentsController.updateOwner);
router.delete("/user/documents/:username", DocumentsController.deleteOwner);
router.patch("/user/documents/updatedocuments/:username", DocumentsController.updateDocumentsInfo);


module.exports = router;