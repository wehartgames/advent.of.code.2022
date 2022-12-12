const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');

var elves = [];
var elf = 0;
var calories = [];

inputFile.split(/\r?\n/).forEach(line => {
    if (line != "") {
        calories.push(parseInt(line));
    } else {
        elf ++;
        calories = [];
    }
    elves[elf] = calories;
})

var totalCalories = [];
elves.forEach(elf => {
    var sum = 0;
    elf.forEach(calories => {
        sum += calories;
    })
    totalCalories.push(sum);
});

totalCalories.sort(function(a,b) {return b-a});

var topThreeTotal = 0;
topThreeTotal = totalCalories[0] + totalCalories[1] + totalCalories[2];

console.log("Top Three Calorie Amounts: " + totalCalories[0] + ", " + totalCalories[1]  + ", " + totalCalories[2] + " | Total: " + topThreeTotal)
