const fs = require("fs");
const reader = require("readline-sync");

function executeIntCode(input, inputValue) {
  let inputLgt = input.length;
  let nextProgramToTest = 0;
  for (let i = 0; i < inputLgt; ) {
    let instruction = input[i].toString();
    let opCode;
    let instLen = instruction.length;
    let param1;
    let param2;
    let param3;

    if (instLen > 2) {
      let wholeInst = input[i].toString();
      opCode = parseInt(wholeInst[instLen - 1]);
      let modeParam1 = parseInt(wholeInst[instLen - 3]);
      let modeParam2 = parseInt(wholeInst[instLen - 4] || 0);
      let modeParam3 = parseInt(wholeInst[instLen - 5] || 0);
      if (modeParam1 === 1) {
        //immediate mode
        param1 = input[i + 1];
      } else {
        //position mode
        param1 = input[input[i + 1]];
      }
      if (modeParam2 === 1) {
        //immediate mode
        param2 = input[i + 2];
      } else {
        //position mode
        param2 = input[input[i + 2]];
      }
      if (modeParam3 === 1) {
        //immediate mode
        param3 = input[i + 3];
      } else {
        //position mode
        param3 = input[input[i + 3]];
      }
    } else {
      //by default the params are using position mode
      opCode = input[i];
      param1 = input[input[i + 1]];
      param2 = input[input[i + 2]];
      param3 = input[input[i + 3]];
    }
    switch (opCode) {
      case 1: //addition
        input[input[i + 3]] = param1 + param2;
        i += 4;
        break;
      case 2: //multiplication
        input[input[i + 3]] = param1 * param2;
        i += 4;
        // console.log("=================> multiplication: ", input[param3]);
        break;
      case 3: //store input
        //let inputValue = reader.question(`What input do you want to add? `);
        input[input[i + 1]] = inputValue;
        i += 2;
        break;
      case 4: //output value
        let output = param1;
        if (output !== 0 && input[i + 2] !== 99) {
          correctInstructions(input, nextProgramToTest, i);
        } else if (input[i + 2] === 99) {
          return output;
        }
        i += 2;
        nextProgramToTest = i;
        break;
      case 5: //jump if true
        if (param1 !== 0) {
          i = param2;
          break;
        }
        i += 3;
        break;
      case 6: //jump if false
        if (param1 === 0) {
          i = param2;
          break;
        }
        i += 3;
        break;
      case 7: //less than
        if (param1 < param2) {
          input[input[i + 3]] = 1;
        } else {
          input[input[i + 3]] = 0;
        }
        i += 4;
        break;
      case 8: //equals
        if (param1 === param2) {
          input[input[i + 3]] = 1;
        } else {
          input[input[i + 3]] = 0;
        }
        i += 4;
        break;
      case 99: //end programme
        console.log("=================> programme ended");
        return input;
    }
  }
}

function correctInstructions(input, firstInst, lastInst) {
  console.log(
    input[firstInst],
    input[firstInst + 1],
    input[firstInst + 2],
    input[firstInst + 3]
  );
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
