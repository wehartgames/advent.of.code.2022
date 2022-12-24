const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');
var answer = 0;

inputFile.split(/\r?\n/).forEach((line, i) => {
    let assignments = line.split(',');
    let assignment1 = assignments[0].split('-');
    let assignment2 = assignments[1].split('-');
    
    if (isContained(assignment1, assignment2)) {
        answer += 1;
    }
});

console.log(answer);

function isContained(range1, range2) {
    let range1Start = parseInt(range1[0]);
    let range1End = parseInt(range1[1]);
    let range2Start = parseInt(range2[0]);
    let range2End = parseInt(range2[1]);

    let r1StartInR2 = (range1Start >= range2Start) && (range1Start <= range2End);
    let r1EndInR2 = (range1End >= range2Start) && (range1End <= range2End);
    let r2StartInR1 = (range2Start >= range1Start) && (range2Start <= range1End);
    let r2EndInR1 = (range2End >= range1Start) && (range2End <= range1End);
    let r1InR2 = r1StartInR2 && r1EndInR2;
    let r2InR1 = r2StartInR1 && r2EndInR1;

    if (!r1InR2 && !r2InR1) {
        return false;
    }

    return true;
}
