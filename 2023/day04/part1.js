const fs = require("fs");
const data = fs.readFileSync(`./input.txt`, "utf-8");

const inputs = data.split("\n");



const getArrayNumbers = (nums) => {
    return nums.trim().split(" ").filter((n) => n !== '')
}

const getNumbers = (line) => {
    const allNumbers = line.replace(/Card \d{1,2}:/gi, "")
    const winningNumbers = allNumbers.split("|")[0]
    const yourNumbers = allNumbers.split("|")[1]

    return { winningNumbers: getArrayNumbers(winningNumbers), yourNumbers: getArrayNumbers(yourNumbers) }
}


const main = () => {
    const points = [0]
    for (const line of inputs) {
        if (line === "") continue
        
        const { winningNumbers, yourNumbers } = getNumbers(line);
        const intersect = yourNumbers.filter((x) => winningNumbers.includes(x))

        if (intersect.length > 0) {
            points.push(2**(intersect.length-1))
        }
    }


    console.log(points.reduce((prev, acc) => prev + acc, 0))
}

main();
