const { executeIntCode, readFile } = require("./utils/utils");

function testDay2Part1(inputFile, noun = 12, verb = 2) {
  let data = readFile(inputFile);
  data[1] = noun;
  data[2] = verb;
  let results = executeIntCode(data);
  return results[0];
  console.log(parseInt(results[0]));
}

function testDay2Part2(inputFile) {
  for (let verb = 0; verb < 100; verb++) {
    for (let noun = 0; noun < 100; noun++) {
      result = testDay2Part1(inputFile, noun, verb);
      // console.log("result value = ", result);
      if (result == 19690720) {
        return 100 * noun + verb;
      }
    }
  }
  return null;
}

console.log("results day 2 part 1 = ", testDay2Part1("./inputs/input.txt"));
console.log("results day 2 part 2 = ", testDay2Part2("./inputs/input.txt"));
