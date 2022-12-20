const priorities = require('./priorities.json');
const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');

var sum = 0;
inputFile.split(/\r?\n/).forEach(line => {
    var halfIndex = line.length / 2;
    var pocket1 = line.slice(0, halfIndex);
    var pocket2 = line.slice(halfIndex);
    var priorityItem = '';

    for (let item of pocket1) {
        if (pocket2.search(item) != -1) {
            priorityItem = item;
            break;
        }
    }

    sum += priorities[priorityItem];
});

console.log(sum);
