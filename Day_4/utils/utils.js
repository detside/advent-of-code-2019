var fs = require("fs");

function readFile(requiredFile) {
  try {
    var data = fs.readFileSync(requiredFile, "utf8");
    // return data;
    return data.split("-");
  } catch (e) {
    console.log("Error:", e.stack);
    return null;
  }
}

function checkNumber(number) {
  let check = false;
  let string = number.toString();
  let a = parseInt(string[0]);
  let b = parseInt(string[1]);
  let c = parseInt(string[2]);
  let d = parseInt(string[3]);
  let e = parseInt(string[4]);
  let f = parseInt(string[5]);
  if (
    a <= b &&
    b <= c &&
    c <= d &&
    d <= e &&
    e <= f &&
    (a === b || b === c || c === d || d === e || e === f)
  ) {
    if (a === b && b !== c) {
      check = true;
    }
    if (b === c && c !== d && a !== b) {
      check = true;
    }
    if (c === d && d !== e && b !== c) {
      check = true;
    }
    if (d === e && e !== f && c !== d) {
      check = true;
    }
    if (e === f && d !== e) {
      check = true;
    }
  }
  return check;
}

module.exports = {
  readFile,
  checkNumber
};
