var fs = require("fs");

function executeIntCode(input) {
  let inputLgt = input.length;
  for (let i = 0; i < inputLgt; i += 4) {
    // console.log(
    //   "input i = ",
    //   input[i],
    //   "input i+1 = ",
    //   input[i + 1],
    //   "input i+2 = ",
    //   input[i + 2],
    //   "input i+3 = ",
    //   input[i + 3]
    // );
    input[i] = parseInt(input[i]);
    input[i + 1] = parseInt(input[i + 1]);
    input[i + 2] = parseInt(input[i + 2]);
    input[i + 3] = parseInt(input[i + 3]);
    switch (parseInt(input[i])) {
      case 1:
        //addition
        input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
        break;
      case 2:
        //multiplication
        input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
        // console.log("=================> multiplication");
        break;
      case 99:
        //end programme
        // console.log("=================> programme ended");
        return input;
    }
  }
}

function readFile(requiredFile) {
  try {
    var data = fs.readFileSync(requiredFile, "utf8");
    return data.split(",");
  } catch (e) {
    console.log("Error:", e.stack);
    return null;
  }
}

module.exports = { executeIntCode, readFile };
