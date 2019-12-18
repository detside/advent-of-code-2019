const {
  returnPattern,
  returnUpdatedDigit,
  returnLargeInput
} = require("./utils/utils");

const inputPattern = [0, 1, 0, -1];
const input = "03036732577212944063491565474664";
console.log(input.length);

let results;
function day16part1(iterations) {
  let numberLength = input.length;
  let inputNumber = input;
  for (let i = 0; i < iterations; i++) {
    results = "";
    for (let j = 0; j < numberLength; j++) {
      results += returnUpdatedDigit(
        inputNumber,
        returnPattern(inputPattern, j + 1)
      );
    }
    inputNumber = results;
  }
  return results.substring(0, 8);
}

function day16part2(iterations) {
  //create new input as 10000 times original input
  const newInput = returnLargeInput(input, 10000);
  let numberLength = newInput.length;
  let inputNumber = newInput;
  for (let i = 0; i < iterations; i++) {
    results = "";
    for (let j = 0; j < numberLength; j++) {
      results += returnUpdatedDigit(
        inputNumber,
        returnPattern(inputPattern, j + 1)
      );
    }
    inputNumber = results;
  }
  return results.substring(
    parseInt(results.substring(7)),
    parseInt(results.substring(7) + 8)
  );
}

console.log(day16part1(100));
console.log(day16part2(100));
