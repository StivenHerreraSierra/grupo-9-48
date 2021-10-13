const { constants } = require("buffer");
const fs = require("fs");
const path = require("path");



module.exports = class FileUtil {
  static exists(path) {
    return fs.access(path, constants.F_OK, (err) => (err ? false : true));
  }

  static mkdir(dir) {
    fs.mkdir(
      path.join(dir),
      { recursive: true },
      (err) => (err ? console.log("Error: ", err) : console.log("Uploaded"))
    );
  }

  static getExtension(fullname) {
    return fullname.split(".").pop();
  }

  static renameUserFolder(oldUser, newUser) {
    const root = "resources/";
    fs.access(root + oldUser, constants.F_OK, (err) => {
      if (!err)
        fs.promises.rename(root + oldUser, root + newUser);
    });
  }

  static async deleteDocument(file) {
    await fs.promises.unlink('resources' + file);
  }
};
