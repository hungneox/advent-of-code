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

// console.table(matrix)
const symbols = ['/', '!', '@', '#', '+', '-', '%', '*', '&', '^', '[', ']', ',', '{', '}', '~', '$']

const isSymbol = (input) => symbols.includes(input)

const hasAdjacentSymbols = (row, col) => {
    return isSymbol(matrix[row][col - 1])
        || isSymbol(matrix[row][col + 1])
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
        } else {
            // console.log(temp, isValids)
            if (temp !== '' && isValids.some((value) => value)) {
                numbers.push(parseInt(temp.trim(), 10))
            }
            isValids = []
            temp = ''
        }
    }
}

// console.table(matrix)
console.log(numbers)
console.log(numbers.reduce((prev, acc) => prev + acc, 0))