const fs = require("fs");
const reader = require("readline-sync");

function executeIntCode(input, inputValues) {
  let inputLgt = input.length;
  let nextProgramToTest = 0;
  let codeThreeCalled = false;
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
        break;
      case 3: //store input
        //let inputValue = reader.question(`What input do you want to add? `);
        if (!codeThreeCalled) {
          // console.log("Let's get this input in");
          input[input[i + 1]] = inputValues[0];
          codeThreeCalled = true;
        } else {
          // console.log("Let's get this second input in");
          input[input[i + 1]] = inputValues[1];
        }

        i += 2;
        break;
      case 4: //output value ---> this specific condition seems to be causing some problems...
        // let output = param1;
        return param1;
        // if (output !== 0 && input[i + 2] !== 99) {
        //   correctInstructions(input, nextProgramToTest, i);
        // } else if (input[i + 2] === 99) {
        //   return output;
        // }
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

const findAllPermutations = inputArr => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

function runAmplifiersOnce(data, currentPhaseSetting, initInput) {
  let output1 = executeIntCode([...data], [currentPhaseSetting[0], initInput]);
  let output2 = executeIntCode([...data], [currentPhaseSetting[1], output1]);
  let output3 = executeIntCode([...data], [currentPhaseSetting[2], output2]);
  let output4 = executeIntCode([...data], [currentPhaseSetting[3], output3]);
  let finalOutput = executeIntCode(
    [...data],
    [currentPhaseSetting[4], output4]
  );
  return finalOutput;
}

function runAmplifiersLoop(
  data,
  currentPhaseSetting,
  initInput,
  currentOutput = 0
) {
  let copiedData = [[...data], [...data], [...data], [...data], [...data]];
  let savedOutput = 0;
  let output1 = executeIntCode(copiedData[0], [
    currentPhaseSetting[0],
    initInput
  ]);
  let output2 = executeIntCode(copiedData[1], [
    currentPhaseSetting[1],
    output1
  ]);
  let output3 = executeIntCode(copiedData[2], [
    currentPhaseSetting[2],
    output2
  ]);
  let output4 = executeIntCode(copiedData[3], [
    currentPhaseSetting[3],
    output3
  ]);
  currentOutput = executeIntCode(copiedData[4], [
    currentPhaseSetting[4],
    output4
  ]);
  console.log({ currentOutput });
  while (currentOutput > savedOutput && currentOutput) {
    console.log("Loop started");
    savedOutput = currentOutput;
    console.log({ savedOutput });
    let output1 = executeIntCode(copiedData[0], [
      currentPhaseSetting[savedOutput],
      initInput
    ]);
    console.log({ output1 });
    let output2 = executeIntCode(copiedData[1], [
      currentPhaseSetting[1],
      output1
    ]);
    console.log({ output2 });
    let output3 = executeIntCode(copiedData[2], [
      currentPhaseSetting[2],
      output2
    ]);
    console.log({ output3 });
    let output4 = executeIntCode(copiedData[3], [
      currentPhaseSetting[3],
      output3
    ]);
    console.log({ output4 });
    currentOutput = executeIntCode(copiedData[4], [
      currentPhaseSetting[4],
      output4
    ]);
  }
  console.log(("Output now ", currentOutput));
  return currentOutput;
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

module.exports = {
  readFile,
  findAllPermutations,
  runAmplifiersOnce,
  runAmplifiersLoop
};
