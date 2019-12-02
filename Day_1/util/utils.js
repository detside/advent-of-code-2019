const { floor } = require("mathjs");
var fs = require("fs");

function readFile(requiredFile) {
  try {
    var data = fs.readFileSync(requiredFile, "utf8");
    return data;
  } catch (e) {
    console.log("Error:", e.stack);
    return null;
  }
}

function calcModuleFuel(inputMass) {
  return floor(inputMass / 3) - 2;
}

function calcFuelOnFuel(inputMass) {
  let totalFuel = 0;
  let reqFuel = 0;
  reqFuel = calcModuleFuel(inputMass);
  //console.log("initReqFuel= ", reqFuel);
  //console.log("initTotalFuel= ", totalFuel);
  while (reqFuel > 0) {
    totalFuel += reqFuel;
    //console.log(totalFuel);
    reqFuel = calcModuleFuel(reqFuel);
  }
  return totalFuel;
}

module.exports = { readFile, calcModuleFuel, calcFuelOnFuel };
