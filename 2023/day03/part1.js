const fs = require("fs");
const data = fs.readFileSync(`./input1.txt`, "utf-8");

const inputs = data.split("\n");

const matrix = []

const numbers = []

const isNumber = (input) => {
    return /^\d*$/.test(input);
}

for (const line of inputs) {
    matrix.push(line.trim("\r").split(""))
}

// Part 2
// https://www.reddit.com/r/adventofcode/comments/189qxff/2023_day_3_gear_scanning_visualization/

const isSymbol = (input) => !isNumber(input) && input !== '.'

const hasAdjacentSymbols = (row, col) => {
    return (!!matrix[row][col - 1] && isSymbol(matrix[row][col - 1]))
        || (!!matrix[row][col + 1] && isSymbol(matrix[row][col + 1]))
        || (!!matrix[row - 1] && !!matrix[row - 1][col] && isSymbol(matrix[row - 1][col]))
        || (!!matrix[row + 1] && !!matrix[row + 1][col] && isSymbol(matrix[row + 1][col]))
        || (!!matrix[row - 1] && !!matrix[row - 1][col - 1] && isSymbol(matrix[row - 1][col - 1]))
        || (!!matrix[row + 1] && !!matrix[row + 1][col + 1] && isSymbol(matrix[row + 1][col + 1]))
        || (!!matrix[row - 1] && !!matrix[row - 1][col + 1] && isSymbol(matrix[row - 1][col + 1]))
        || (!!matrix[row + 1] && !!matrix[row + 1][col - 1] && isSymbol(matrix[row + 1][col - 1]))
        
}

for (let row = 0; row < matrix.length; row++) {
    let temp = ''
    let isValids = []

    for (let col = 0; col < matrix[row].length; col++) {
        const current = matrix[row][col]

        if (isNumber(current)) {
            temp += current
            isValids.push(hasAdjacentSymbols(row, col))

            if (col === matrix[row].length - 1) {
                if (temp !== '' && isValids.some((value) => !!value)) {
                    numbers.push(Number(temp))
                }
            }
        } else {
            if (temp !== '' && isValids.some((value) => !!value)) {
                numbers.push(Number(temp))
            }
            isValids = []
            temp = ''
        }
    }
}

// console.table(matrix)
// numbers.map((num) => console.log(num))
console.log(numbers.reduce((prev, acc) => prev + acc, 0))