var fs = require("fs");

function readFile(requiredFile) {
  try {
    var data = fs.readFileSync(requiredFile, "utf8");
    // return data;
    return data.split("\n");
  } catch (e) {
    console.log("Error:", e.stack);
    return null;
  }
}

function mapWireLocations(wireInstructions) {
  let locations = [];
  locations[0] = [0, 0];
  let instructionsLgt = wireInstructions.length;
  for (let i = 0; i < instructionsLgt; i++) {
    locations = addPositions(wireInstructions[i], locations);
  }
  return locations;
}

function addPositions(instruction, locations) {
  //this function adds positions to an array based on the directional instructions provided
  let regexLength = /[A-Z]{1}([0-9]{1,5})/;
  let direction = instruction[0];
  let length = instruction.match(regexLength)[1];
  let x0 = locations[locations.length - 1][0] || 0;
  let y0 = locations[locations.length - 1][1] || 0;
  // console.log(
  //   "Starting point: [x0 = ",
  //   x0,
  //   ", y0 = ",
  //   y0,
  //   "]",
  //   " Direction: ",
  //   direction,
  //   " Length: ",
  //   length
  // );
  switch (direction) {
    case "U":
      // console.log("Going up");
      for (let i = 0; i < length; i++) {
        locations[locations.length] = [x0, y0 + i + 1];
      }
      break;
    case "D":
      // console.log("Going down");
      for (let i = 0; i < length; i++) {
        locations[locations.length] = [x0, y0 - i - 1];
      }
      break;
    case "L":
      // console.log("Going left");
      for (let i = 0; i < length; i++) {
        locations[locations.length] = [x0 - i - 1, y0];
      }
      break;
    case "R":
      // console.log("Going right");
      for (let i = 0; i < length; i++) {
        locations[locations.length] = [x0 + i + 1, y0];
      }
      break;
  }
  return locations;
}

function findIntersections(positionsWire1, positionsWire2) {
  let intersections = [];
  for (let i = 0; i < positionsWire1.length; i++) {
    for (let j = 0; j < positionsWire2.length; j++) {
      //console.log(positionsWire1[i], positionsWire1[j]);
      if (
        positionsWire1[i][0] === positionsWire2[j][0] &&
        positionsWire1[i][1] === positionsWire2[j][1]
      ) {
        //console.log("============found one!!");
        intersections[intersections.length] = [
          positionsWire1[i][0],
          positionsWire1[i][1],
          i,
          j
        ];
      }
    }
  }
  return intersections;
}

function findClosestPoint(intersections) {
  let shortestDistance = 1000;
  for (let i = 0; i < intersections.length - 1; i++) {
    let distance =
      Math.abs(intersections[i + 1][0]) + Math.abs(intersections[i + 1][1]);
    if (distance < shortestDistance && distance != 0) {
      shortestDistance = distance;
    }
  }
  return shortestDistance;
}

function findLeastNumberOfSteps(intersections) {
  let leastNumberOfSteps = 100000;
  for (let i = 0; i < intersections.length - 1; i++) {
    let currentNumberOfSteps =
      intersections[i + 1][2] + intersections[i + 1][3];
    if (currentNumberOfSteps < leastNumberOfSteps) {
      leastNumberOfSteps = currentNumberOfSteps;
    }
  }
  return leastNumberOfSteps;
}

module.exports = {
  readFile,
  mapWireLocations,
  findIntersections,
  findClosestPoint,
  findLeastNumberOfSteps
};
