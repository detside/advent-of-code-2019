const { readFile } = require("./utils/utils");

function Day8(inputFile) {
  let pixels = readFile(inputFile);
  let height = 6;
  let width = 25;
  let pixelsInLayer = height * width;
  let numLayers = pixels.length / pixelsInLayer;
  console.log(numLayers);
  let layers = [];
  let count0 = new Array(numLayers).fill(0);
  let count1 = new Array(numLayers).fill(0);
  let count2 = new Array(numLayers).fill(0);
  for (let i = 0; i < numLayers; i++) {
    layers[i] = pixels.slice(pixelsInLayer * i, pixelsInLayer * (i + 1));
    layers[i].split("").forEach(element => {
      if (element === "0") {
        count0[i]++;
      } else if (element === "1") {
        count1[i]++;
      } else if (element === "2") {
        count2[i]++;
      }
    });
  }
  let resultPart1 = count1[8] * count2[8];
  console.log("results day 8 part 1 = ", resultPart1);

  let visibleImage = "";
  for (let i = 0; i < pixelsInLayer; i++) {
    for (let j = 0; j < numLayers; j++) {
      if (layers[j][i] === "0") {
        visibleImage += " ";
        break;
      } else if (layers[j][i] === "1") {
        visibleImage += "0";
        break;
      }
    }
  }
  let display = [];
  for (let i = 0; i < height; i++) {
    display[i] = visibleImage.slice(width * i, width * (i + 1));
  }
  return display;
}

// console.log("results day 8 part 1 = ", Day8Part1("./inputs/inputs.txt"));
console.log("results day 6 part 2 = ", Day8("./inputs/inputs.txt"));
