const fs = require("fs");
const data = fs.readFileSync(`./sample.txt`, "utf-8");

const lines = data.split("\n");

// Extracting seeds
const seedsLine = lines[0].split(': ')[1];
const seeds = seedsLine.split(' ').map(Number);

// Extracting other maps
const maps = {};
let currentMap = '';
lines.slice(2).forEach(line => {
    if (line.trim().endsWith(' map:')) {
        currentMap = line.replace(' map:\r', '');
        maps[currentMap] = [];
    } else {
        const values = line.split(' ').filter((n) => n.trim() !== '').map(Number)
        if (values.length) {
            maps[currentMap].push(values);
        }
    }
});

console.log("Seeds:", seeds);
console.log("Maps:", maps);

