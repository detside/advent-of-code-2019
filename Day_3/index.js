const {
  readFile,
  mapWireLocations,
  findIntersections,
  findClosestPoint,
  findLeastNumberOfSteps
} = require("./utils/utils");

function testDay3Part1(inputFile) {
  let wireInstructions = readFile(inputFile);
  let locationsWire1 = mapWireLocations(wireInstructions[0].split(","));
  // console.log(locationsWire1);
  let locationsWire2 = mapWireLocations(wireInstructions[1].split(","));
  let intersections = findIntersections(locationsWire1, locationsWire2);
  console.log(intersections);
  let result = findClosestPoint(intersections);
  return result;
}

function testDay3Part2(inputFile) {
  let wireInstructions = readFile(inputFile);
  let locationsWire1 = mapWireLocations(wireInstructions[0].split(","));
  // console.log(locationsWire1);
  let locationsWire2 = mapWireLocations(wireInstructions[1].split(","));
  let intersections = findIntersections(locationsWire1, locationsWire2);
  console.log(intersections);
  let result = findLeastNumberOfSteps(intersections);
  return result;
}

//console.log("results day 3 part 1 = ", testDay3Part1("./inputs/inputs.txt"));
console.log("results day 3 part 2 = ", testDay3Part2("./inputs/inputs.txt"));
