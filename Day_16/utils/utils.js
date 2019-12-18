//this function receives the original pattern and based on the number
function returnPattern(pattern, position) {
  let newPattern = [];
  let sizeNewPattern = pattern.length * position;
  let count = 0;
  for (let i = 0; i < sizeNewPattern; i += position) {
    for (let j = 0; j < position; j++) {
      newPattern[i + j] = pattern[count];
    }
    count++;
  }
  //newPattern.shift();
  return newPattern;
}

function returnUpdatedDigit(inputNumber, inputPattern) {
  let num = 0;
  for (let i = 0; i < inputNumber.length; i++) {
    num += inputNumber[i] * inputPattern[(i + 1) % inputPattern.length];
  }
  num = num.toString(10);
  return num[num.length - 1];
}

function returnLargeInput(input, repetitions) {
  let newInput = "";
  for (let i = 0; i < repetitions; i++) {
    newInput += input;
  }
  return newInput;
}

module.exports = { returnPattern, returnUpdatedDigit, returnLargeInput };
