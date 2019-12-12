const {
  computeNextStep,
  computeNextX,
  computeNextY,
  computeNextZ,
  lcm_two_numbers
} = require("./utils/utils");
const positions = require("./inputs/inputs");

function Day12Part1(numSteps) {
  //initialise velocity for all moons
  positions.moonsVelocity = [];
  for (let i = 0; i < positions.moonsPositions.length; i++) {
    positions.moonsVelocity[i] = { x: 0, y: 0, z: 0 };
  }
  for (let i = 0; i < numSteps; i++) {
    computeNextStep(positions);
  }
  let pot = [];
  let kin = [];
  let total = 0;
  for (let i = 0; i < 4; i++) {
    pot[i] =
      Math.abs(positions.moonsPositions[i].x) +
      Math.abs(positions.moonsPositions[i].y) +
      Math.abs(positions.moonsPositions[i].z);
    kin[i] =
      Math.abs(positions.moonsVelocity[i].x) +
      Math.abs(positions.moonsVelocity[i].y) +
      Math.abs(positions.moonsVelocity[i].z);
    total += pot[i] * kin[i];
  }
  return { total };
}

function Day12Part2() {
  //initialise velocity for all moons
  positions.moonsVelocity = [];
  for (let i = 0; i < positions.moonsPositions.length; i++) {
    positions.moonsVelocity[i] = { x: 0, y: 0, z: 0 };
  }

  //values for case to solve
  let moon1FirstPos = { x: -10, y: -10, z: -13 };
  let moon2FirstPos = { x: 5, y: 5, z: -9 };
  let moon3FirstPos = { x: 3, y: 8, z: -16 };
  let moon4FirstPos = { x: 1, y: 3, z: -3 };

  // //values for test 1
  // let moon1FirstPos = { x: -1, y: 0, z: 2 };
  // let moon2FirstPos = { x: 2, y: -10, z: -7 };
  // let moon3FirstPos = { x: 4, y: -8, z: 8 };
  // let moon4FirstPos = { x: 3, y: 5, z: -1 };

  // //values for test 2
  // let moon1FirstPos = { x: -8, y: -10, z: 0 };
  // let moon2FirstPos = { x: 5, y: 5, z: 10 };
  // let moon3FirstPos = { x: 2, y: -7, z: 3 };
  // let moon4FirstPos = { x: 9, y: -8, z: -3 };

  //first get the first time X loops on itself
  computeNextX(positions);
  let numStepsX = BigInt(1);
  while (true) {
    computeNextX(positions);
    numStepsX++;
    if (
      positions.moonsPositions[0].x === moon1FirstPos.x &&
      positions.moonsPositions[1].x === moon2FirstPos.x &&
      positions.moonsPositions[2].x === moon3FirstPos.x &&
      positions.moonsPositions[3].x === moon4FirstPos.x &&
      positions.moonsVelocity[0].x === 0 &&
      positions.moonsVelocity[1].x === 0 &&
      positions.moonsVelocity[2].x === 0 &&
      positions.moonsVelocity[3].x === 0
    ) {
      break;
    }
  }
  //then get the first time Y loops on itself
  computeNextY(positions);
  let numStepsY = BigInt(1);
  while (true) {
    computeNextY(positions);
    numStepsY++;
    if (
      positions.moonsPositions[0].y === moon1FirstPos.y &&
      positions.moonsPositions[1].y === moon2FirstPos.y &&
      positions.moonsPositions[2].y === moon3FirstPos.y &&
      positions.moonsPositions[3].y === moon4FirstPos.y &&
      positions.moonsVelocity[0].y === 0 &&
      positions.moonsVelocity[1].y === 0 &&
      positions.moonsVelocity[2].y === 0 &&
      positions.moonsVelocity[3].y === 0
    ) {
      break;
    }
  }
  //finally get the first time Z loops on itself
  computeNextZ(positions);
  let numStepsZ = BigInt(1);
  while (true) {
    computeNextZ(positions);
    numStepsZ++;
    if (
      positions.moonsPositions[0].z === moon1FirstPos.z &&
      positions.moonsPositions[1].z === moon2FirstPos.z &&
      positions.moonsPositions[2].z === moon3FirstPos.z &&
      positions.moonsPositions[3].z === moon4FirstPos.z &&
      positions.moonsVelocity[0].z === 0 &&
      positions.moonsVelocity[1].z === 0 &&
      positions.moonsVelocity[2].z === 0 &&
      positions.moonsVelocity[3].z === 0
    ) {
      break;
    }
  }
  //console.log(JSON.stringify(positions, null, 2));
  console.log(typeof numStepsX);
  console.log(
    lcm_two_numbers(
      lcm_two_numbers(numStepsX, numStepsY),
      lcm_two_numbers(numStepsY, numStepsZ)
    )
  );
  return { numStepsX, numStepsY, numStepsZ };
}

// console.log(
//   "results day 12 part 1 = \n",
//   JSON.stringify(Day12Part1(1000), null, 2)
// );
console.log("results day 12 part 2 = ", Day12Part2());
