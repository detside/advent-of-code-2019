const {
  readFile,
  findAllPermutations,
  runAmplifiersOnce,
  runAmplifiersLoop
} = require("./utils/utils");

function day7part1(inputFile) {
  let data = readFile(inputFile);
  data = data.map(item => parseInt(item));
  let potentialPhaseSettings = findAllPermutations([0, 1, 2, 3, 4]);
  let bestPermutation;
  let highestOutput = 0;
  for (let i = 0; i < potentialPhaseSettings.length; i++) {
    let currentOutput = runAmplifiersOnce(data, potentialPhaseSettings[i], 0);
    if (highestOutput <= currentOutput) {
      highestOutput = currentOutput;
      bestPermutation = i;
    }
  }
  console.log(potentialPhaseSettings[bestPermutation]);
  return highestOutput;
}

//issues with the codebase in this one... due apparently to the opCode 4, output when code appears away from code 99.
function day7part2(inputFile) {
  let data = readFile(inputFile);
  data = data.map(item => parseInt(item));
  let potentialPhaseSettings = findAllPermutations([5, 6, 7, 8, 9]);
  let bestPermutation;
  let highestOutput = 0;
  let currentOutput = 0;
  for (let i = 0; i < potentialPhaseSettings.length; i++) {
    currentOutput = runAmplifiersLoop(
      data,
      potentialPhaseSettings[i],
      currentOutput
    );
    if (highestOutput <= currentOutput) {
      highestOutput = currentOutput;
      bestPermutation = i;
    }
  }
  console.log(potentialPhaseSettings[bestPermutation]);
  return highestOutput;
}
// console.log("results day 7 part 1 = ", day7part1("./inputs/input.txt"));
console.log("results day 7 part 2 = ", day7part2("./inputs/input.txt"));
