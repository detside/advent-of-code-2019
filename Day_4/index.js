const { readFile, checkNumber } = require("./utils/utils");

function testDay4Part1(inputFile) {
  let range = readFile(inputFile);
  let count = 0;
  for (let i = range[0]; i < range[1]; i++) {
    if (checkNumber(i)) {
      count++;
    }
  }
  return count;
}

function testDay4Part2(inputFile) {}
//console.log(checkNumber(111111));
console.log("results day 4 part 1 = ", testDay4Part1("./inputs/inputs.txt"));
//console.log("results day 3 part 2 = ", testDay3Part2("./inputs/inputs.txt"));
