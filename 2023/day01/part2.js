const fs = require("fs");
const data = fs.readFileSync(`./input02.txt`, "utf-8");

const inputs = data.split("\n");

const twoDigitsNumbers = [];

const isNumber = (input) => {
    return /^\d*$/.test(input);
};


const convertTextToNumber2 = (input) => {
    input = input.replace(/oneight/g, "oneeight")
    input = input.replace(/threeight/g, "threeeight")
    input = input.replace(/fiveight/g, "fiveeight")
    input = input.replace(/nineight/g, "nineeight")
    input = input.replace(/twone/g, "twoone")
    input = input.replace(/sevenine/g, "sevennine")
    input = input.replace(/eightwo/g, "eighttwo")
    return input
}

function replaceWordsWithDigits(text) {
    const wordsToDigits = {
        'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4',
        'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'
    };

    let replacedText = text;

    // Iterate through each word-to-digit mapping and replace in the text
    Object.keys(wordsToDigits).forEach(word => {
        const regex = new RegExp(word, 'gi');
        replacedText = replacedText.replace(regex, wordsToDigits[word]);
    });

    return replacedText;
}

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
    const _line = replaceWordsWithDigits(convertTextToNumber2(line))
    const number = findNumbers(_line);
    twoDigitsNumbers.push(parseInt(number, 10));
}

// console.log(twoDigitsNumbers)
console.log(twoDigitsNumbers.reduce((a, b) => a + b, 0))
