function computeNextStep(currentPositions) {
  let nextPositions = {};
  // nextPositions.moonsPositions = [...currentPositions.moonsPositions];
  // nextPositions.moonsVelocity = [...currentPositions.moonsVelocity];
  nextPositions = { ...currentPositions };
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j != i) {
        nextPositions.moonsVelocity[i].x +=
          currentPositions.moonsPositions[i].x <
          currentPositions.moonsPositions[j].x
            ? 1
            : currentPositions.moonsPositions[i].x ===
              currentPositions.moonsPositions[j].x
            ? 0
            : -1;
        nextPositions.moonsVelocity[i].y +=
          currentPositions.moonsPositions[i].y <
          currentPositions.moonsPositions[j].y
            ? 1
            : currentPositions.moonsPositions[i].y ===
              currentPositions.moonsPositions[j].y
            ? 0
            : -1;

        nextPositions.moonsVelocity[i].z +=
          currentPositions.moonsPositions[i].z <
          currentPositions.moonsPositions[j].z
            ? 1
            : currentPositions.moonsPositions[i].z ===
              currentPositions.moonsPositions[j].z
            ? 0
            : -1;
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    nextPositions.moonsPositions[i].x += currentPositions.moonsVelocity[i].x;
    nextPositions.moonsPositions[i].y += currentPositions.moonsVelocity[i].y;
    nextPositions.moonsPositions[i].z += currentPositions.moonsVelocity[i].z;
  }
  currentPositions = nextPositions;
}

function computeNextX(currentPositions) {
  let nextPositions = { ...currentPositions };

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j != i) {
        nextPositions.moonsVelocity[i].x +=
          currentPositions.moonsPositions[i].x <
          currentPositions.moonsPositions[j].x
            ? 1
            : currentPositions.moonsPositions[i].x ===
              currentPositions.moonsPositions[j].x
            ? 0
            : -1;
      }
    }
  }
  //console.log(JSON.stringify({ nextPositions, currentPositions }, null, 2));
  for (let i = 0; i < 4; i++) {
    nextPositions.moonsPositions[i].x += currentPositions.moonsVelocity[i].x;
  }
  currentPositions = nextPositions;
}

function computeNextY(currentPositions) {
  let nextPositions = { ...currentPositions };

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j != i) {
        nextPositions.moonsVelocity[i].y +=
          currentPositions.moonsPositions[i].y <
          currentPositions.moonsPositions[j].y
            ? 1
            : currentPositions.moonsPositions[i].y ===
              currentPositions.moonsPositions[j].y
            ? 0
            : -1;
      }
    }
  }
  //console.log(JSON.stringify({ nextPositions, currentPositions }, null, 2));
  for (let i = 0; i < 4; i++) {
    nextPositions.moonsPositions[i].y += currentPositions.moonsVelocity[i].y;
  }
  currentPositions = nextPositions;
}

function computeNextZ(currentPositions) {
  let nextPositions = { ...currentPositions };

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (j != i) {
        nextPositions.moonsVelocity[i].z +=
          currentPositions.moonsPositions[i].z <
          currentPositions.moonsPositions[j].z
            ? 1
            : currentPositions.moonsPositions[i].z ===
              currentPositions.moonsPositions[j].z
            ? 0
            : -1;
      }
    }
  }
  //console.log(JSON.stringify({ nextPositions, currentPositions }, null, 2));
  for (let i = 0; i < 4; i++) {
    nextPositions.moonsPositions[i].z += currentPositions.moonsVelocity[i].z;
  }
  currentPositions = nextPositions;
}

function lcm_two_numbers(x, y) {
  if (typeof x !== "bigint" || typeof y !== "bigint") return false;
  return !x || !y ? 0 : (x * y) / gcd_two_numbers(x, y);
}

function gcd_two_numbers(x, y) {
  //x = Math.abs(x);
  //y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

module.exports = {
  computeNextStep,
  computeNextX,
  computeNextY,
  computeNextZ,
  lcm_two_numbers
};
