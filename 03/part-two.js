const priorities = require('./priorities.json');
const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');
const rucksacks = inputFile.split(/\r?\n/);
const groupSize = 3;
var sum = 0;

for (let i = 0; i < rucksacks.length; i += groupSize) {
    var priorityItem = '';
    var commonItems = [];

    for (let item of rucksacks[i]) {
        if ((rucksacks[i + 1].search(item) != -1) && !(commonItems.includes(item))) {
            commonItems.push(item);
        }
    }
    
    for (let item of commonItems) {
        if (rucksacks[i + 2].search(item) != -1) {
            priorityItem = item;
            break;
        }
    }

    sum += priorities[priorityItem];
}

console.log(sum);
