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
};
