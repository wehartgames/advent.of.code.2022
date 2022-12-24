const stacks = require('./stacks.json');
const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');
var answer = 0;

inputFile.split(/\r?\n/).forEach((line, i) => {
    let sequence = extractNumberFromString(line);
    let origStack = stacks[sequence[1]];
    let newStack = stacks[sequence[2]];
    let c = parseInt(sequence[0])

    for (x = c; x > 0; x--) {
        let origLength = origStack.length;
        newStack.push(origStack[origLength-1]);
        origStack.pop();
    }
});

answer = stacks['1'][stacks['1'].length-1] + stacks['2'][stacks['2'].length-1] + stacks['3'][stacks['3'].length-1] + stacks['4'][stacks['4'].length-1] + stacks['5'][stacks['5'].length-1] + stacks['6'][stacks['6'].length-1] + stacks['7'][stacks['7'].length-1] + stacks['8'][stacks['8'].length-1] + stacks['9'][stacks['9'].length-1];

console.log(answer);

function extractNumberFromString(str) {
    let result = [];
    let regex = /\d+/g;
    let matches;

    while ((matches = regex.exec(str)) != null) {
        result.push(matches[0]);
    }

    return result;
}