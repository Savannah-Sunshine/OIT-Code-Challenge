// seven basic roman numerals:
const romanNumerals = ["I", "V", "X", "L", "C", "D", "M"];
const romanValues = [1, 5, 10, 50, 100, 500, 1000];

function convertRomanToDecimal(roman) {
  let result = 0;
  let rightValue = -1;

  // Goes backwards because negatives are to the left
  for (let i = roman.length - 1; i >= 0; i--) {
    // Gets value of numeral at i
    const currValue = romanValues[romanNumerals.indexOf(roman[i])];

    // If value at i is less than previous value, subtract it from result
    // Aka, the numeral is
    if (rightValue > currValue) {
      result -= currValue;
    } else {
      result += currValue;
    }

    rightValue = currValue;
  }

  return result;
}

// Test cases
// console.log(converter.convertRomanToDecimal("XIV")); // 14
// console.log(converter.convertRomanToDecimal("XCIX")); // 99
// console.log(converter.convertRomanToDecimal("MMXX")); // 2020
// console.log(converter.convertRomanToDecimal("XLIV")); // 44
// console.log(converter.convertRomanToDecimal("XXIV")); // 24
// console.log(converter.convertRomanToDecimal("MMMCMXCIX")); // 3999

module.exports = convertRomanToDecimal;
