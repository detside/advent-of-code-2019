var fs = require("fs");

function readFile(requiredFile) {
  try {
    var data = fs.readFileSync(requiredFile, "utf8");
    // return data;
    return data;
  } catch (e) {
    console.log("Error:", e.stack);
    return null;
  }
}

module.exports = { readFile };
