const {
  readFile,
  createTreeStructure,
  sumValues,
  returnPath,
  findShortestPath
} = require("./utils/utils");

function Day6Part1(inputFile) {
  let orbits = readFile(inputFile);
  orbits = orbits.map(function(e) {
    e = e.split(")");
    Object.assign({}, e);
    return e;
  });
  let structure = createTreeStructure(orbits, "COM");
  const sum = sumValues(structure); //.map(item => item.children);
  return sum;
}

function Day6Part2(inputFile) {
  let orbits = readFile(inputFile);
  orbits = orbits.map(function(e) {
    e = e.split(")");
    e = { name: e[1], parent: e[0] }; //[e[0], e[1]] = [e[1], e[0]];
    return e;
  });
  let storeYOU = returnPath(orbits, "YOU");
  let storeSAN = returnPath(orbits, "SAN");
  let result = findShortestPath(storeYOU, storeSAN);
  return result;
}

console.log("results day 6 part 1 = ", Day6Part1("./inputs/inputs.txt"));
console.log("results day 6 part 2 = ", Day6Part2("./inputs/inputs.txt"));
