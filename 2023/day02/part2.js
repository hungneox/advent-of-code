const fs = require("fs");
const data = fs.readFileSync(`./input01.txt`, "utf-8");

const inputs = data.split("\n");

const gamePower = []

const getGameWithId = (text) => {
    const match = text.match(/^Game \d+/g)
    const [game] = match
    return game

}
const getGameId = (text) => {
    return getGameWithId(text).split(" ")[1]
}

const removeGameId = (line) => {
    const gameId = getGameWithId(line)

    return line.replace(gameId + ":", "").trim()
}

const getChoiceValue = (text, color) => {
    return parseInt(text.replace(color, "").trim(), 10)
}

const isValidChoice = (choice) => {
    return ['green', 'blue', 'red'].map((color) => {
        if (choice.includes(color)) {
            const value = getChoiceValue(choice, color)
            if (value > LIMIT[color]) {
                return false
            }
        }
        return true
    }).every((value) => value)
}

const isValidChoices = (choices) => {
    return choices.map((choice) => isValidChoice(choice)).every((value) => value)
}

for (const line of inputs) {
    const rawSets = removeGameId(line)
    const sets = rawSets.split(";")



    let power = 0
    const MAXVALUES = new Map(Object.entries({
        'red': 0,
        'green': 0,
        'blue': 0,
    }))


    for (const set of sets) {
        const choices = set.split(",")

        for (const choice of choices) {
            for (const color of ['green', 'blue', 'red']) {
                if (choice.includes(color)) {
                    const value = getChoiceValue(choice, color)
                    if (value > MAXVALUES.get(color)) {
                        MAXVALUES.set(color, value)
                    }
                }
            }
        }

        power = MAXVALUES.get('blue') * MAXVALUES.get('red') * MAXVALUES.get('green')
    }
    gamePower.push(parseInt(power, 10))
}

console.log(gamePower.reduce((prev, acc) => prev + acc, 0))