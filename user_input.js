const convertRomanToDecimal = require("./converter.js");
const readline = require("readline");

// Only allow these inputs
const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];

function checkIfRomanInput(input) {
  if (input.length === 0 || !isNaN(input)) {
    return false;
  }

  for (let i = 0; i < input.length; i++) {
    if (!romanNumerals.includes(input[i])) {
      return false;
    }
  }

  return true;
}

// Takes in user input on command line and runs the converter function
function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter a number to convert: ", (answer) => {
    answer = answer.toUpperCase();
    if (!checkIfRomanInput(answer)) {
      console.log("Please enter a valid number");
      rl.close();
      return;
    }

    console.log(convertRomanToDecimal(answer));
    rl.close();
  });
}

main();
