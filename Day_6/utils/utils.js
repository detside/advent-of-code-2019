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

function createTreeStructure(orbits, value, linksToCOM = 0) {
  let numItems = orbits.length;
  let structure = {
    node: {
      name: value,
      linksToCOM: linksToCOM,
      children: []
    }
  };
  for (let i = 0; i < numItems; i++) {
    if (orbits[i][0] === value) {
      let newOrbits = [...orbits];
      newOrbits.splice(i, 1);
      structure.node.children[
        structure.node.children.length
      ] = createTreeStructure(newOrbits, orbits[i][1], linksToCOM + 1);
    }
  }
  return structure;
}

function sumValues(input) {
  let strings = JSON.stringify(input);
  let regex = /"linksToCOM":([0-9]{1,6})/g;
  let results = strings.match(regex);
  let sum = 0;
  for (let i = 0; i < results.length; i++) {
    sum += parseInt(results[i].match(/[0-9]{1,6}/));
  }
  return sum;
}

//fix this shit
function returnPath(orbits, name) {
  let store = [];
  for (let i = 0; i < orbits.length; i++) {
    if (orbits[i].name === name) {
      store[store.length] = orbits[i].parent;
      name = orbits[i].parent;
      i = 0;
    } else if (orbits[i].name === "COM") {
      break;
    }
  }
  return store;
}

function findShortestPath(path1, path2) {
  for (let i = 0; i < path1.length; i++) {
    for (let j = 0; j < path2.length; j++) {
      if (path1[i] === path2[j]) {
        return i + j;
      }
    }
  }
}

module.exports = {
  readFile,
  createTreeStructure,
  sumValues,
  returnPath,
  findShortestPath
};
