const { constants } = require("buffer");
const fs = require("fs");
const path = require("path");



module.exports = class FileUtil {
  static exists(path) {
    return fs.existsSync(path);
  }

  static mkdir(dir) {
    fs.mkdirSync(path.join(dir), { recursive: true });
  }

  static getExtension(fullname) {
    return fullname.split(".").pop();
  }

  static renameUserFolder(oldUser, newUser) {
    const root = "resources/";
    if (FileUtil.exists(root + oldUser))
      fs.renameSync(root + oldUser, root + newUser);
  }

  static deleteDocument(file) {
    fs.unlinkSync('resources' + file);
  }
};
