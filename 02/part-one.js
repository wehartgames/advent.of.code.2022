const fs = require('fs');

const inputFile = fs.readFileSync('input.txt', 'utf-8');

var totalScore = 0;
inputFile.split(/\r?\n/).forEach(line => {
    var selections = line.split(" ");
    var they = selections[0];
    var me = selections[1];

    // A for Rock, B for Paper, and C for Scissors
    // X for Rock, Y for Paper, and Z for Scissors
    // 1 for Rock, 2 for Paper, and 3 for Scissors
    var score = 0;
    if ((me === 'X') && (they === 'C')) {
        score = 1 + 6;
    } else if ((me === 'Y') && (they === 'A')) {
        score = 2 + 6;
    } else if ((me === 'Z') && (they === 'B')) {
        score = 3 + 6;
    } else if ((me === 'X') && (they === 'A')) {
        score = 1 + 3;
    } else if ((me === 'Y') && (they === 'B')) {
        score = 2 + 3;
    } else if ((me === 'Z') && (they === 'C')) {
        score = 3 + 3;
    } else if ((me === 'X') && (they === 'B')) {
        score = 1;
    }else if ((me === 'Y') && (they === 'C')) {
        score = 2;
    }else if ((me === 'Z') && (they === 'A')) {
        score = 3;
    }
    
    totalScore += score;
});

console.log(totalScore);
