const fs = require("fs");
const data = fs.readFileSync(`./input01.txt`, "utf-8");

const inputs = data.split("\n");

const gameIDs = []

const getGameWithId = (text) => {
    const match = text.match(/^Game \d+/g)
    // console.log(match)
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

const LIMIT = {
    'red': 12,
    'green': 13,
    'blue': 14,
}

for (const line of inputs) {
    const gameId = getGameId(line)
    const rawSets = removeGameId(line)
    const sets = rawSets.split(";")

    let isValid = true
    for (const set of sets) {
        const choices = set.split(",")
        // console.log(choices)
        for (const choice of choices) {
            if (choice.includes("red")) {
                const value = parseInt(choice.replace("red", "").trim(), 10)
                if (value > LIMIT["red"]) {
                    isValid = false;
                    break;
                }
            }
            if (choice.includes("blue")) {
                const value = parseInt(choice.replace("blue", "").trim(), 10)
                if (value > LIMIT["blue"]) {
                    isValid = false;
                    break;
                }
            }
            if (choice.includes("green")) {
                const value = parseInt(choice.replace("green", "").trim(), 10)
                if (value > LIMIT["green"]) {
                    isValid = false;
                    break;
                }
            }
        }
    }

    if (isValid) {
        gameIDs.push(parseInt(gameId, 10))
    }
}

console.log(gameIDs.reduce((prev, acc) => prev + acc), 0)