const { calcModuleFuel, readFile, calcFuelOnFuel } = require("./util/utils");

const massTest = [12, 14, 1969, 100756];
const results = [2, 2, 654, 33583];

function day1part1() {
  const data = readFile("./inputs/input.txt").split("\n");
  const lgt = data.length;
  var fuel = 0;
  for (let i = 0; i < lgt; i++) {
    fuel += calcModuleFuel(data[i]);
  }
  console.log("Result of Day 1 Part 1: ", fuel);
  return fuel;
}

function day1part2() {
  const data = readFile("./inputs/input.txt").split("\n");
  const lgt = data.length;
  var fuel = 0;
  for (let i = 0; i < lgt; i++) {
    let moduleFuel = calcModuleFuel(data[i]);
    fuel += moduleFuel + calcFuelOnFuel(moduleFuel);
  }
  console.log("Result of Day 1 Part 2: ", fuel);
}

function testFunctionPart1() {
  let condition = true;
  const testResults = [];
  for (let i = 0; i < massTest.length; i++) {
    testResults[i] = calcModuleFuel.calcModuleFuel(massTest[i]);
    console.log(testResults[i]);
    if (testResults[i] != results[i]) {
      condition = false;
    }
  }
  if (condition) {
    console.log("Success");
  } else {
    console.log("This is not working");
  }
}

function testFunctionPart2() {
  let results = calcFuelOnFuel(100756);
  console.log(results);
}

//testFunction();
//testFunctionPart2();
//day1part1();
day1part2();
