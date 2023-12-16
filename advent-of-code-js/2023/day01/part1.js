const fs = require("fs");
const data = fs.readFileSync(`./input.txt`, "utf-8");

const inputs = data.split("\n");

const twoDigitsNumbers = [];

const isNumber = (input) => {
  return /^\d*$/.test(input);
};

const findNumbers = (line) => {
  const numbers = [];
  for (let char of line) {
    if (isNumber(char)) {
      numbers.push(char);
    }
  }

  if (numbers.length >= 2) {
    return numbers[0] + numbers[numbers.length - 1];
  }

  if (numbers.length === 1) {
    return numbers[0] + numbers[0]
  }

  return 0;
};

for (const line of inputs) {
  const number = findNumbers(line);
  twoDigitsNumbers.push(parseInt(number, 10));
}

console.log(twoDigitsNumbers.reduce((a, b) => a + b, 0))
