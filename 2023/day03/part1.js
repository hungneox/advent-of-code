const fs = require("fs");
const data = fs.readFileSync(`./input.txt`, "utf-8");

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

const DIRECTIONS = [
    [-1,-1],
    [-1, 0],
    [-1, 1],
    [0,-1],
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1]
]
const hasAdjacentSymbols = (row, col) => {
    for (const [x, y] of DIRECTIONS) {
        if (!!matrix[row+x] && !!matrix[row+x][col+y] && isSymbol(matrix[row+x][col+y])) {
            return true
        }
    }
    return false
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