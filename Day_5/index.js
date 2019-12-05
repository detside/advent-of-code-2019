const { executeIntCode, readFile } = require("./utils/utils");

function day5(inputFile, inputValue) {
  let data = readFile(inputFile);
  data = data.map(item => parseInt(item));
  let result = executeIntCode(data, inputValue);
  return result;
}

console.log("results day 5 part 1 = ", day5("./inputs/input.txt", 1));
console.log("results day 5 part 2 = ", day5("./inputs/input.txt", 5));
