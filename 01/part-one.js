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

var topCalories = 0;
var topElf = 0;
totalCalories.forEach((calories, elf) => {
    if (calories > topCalories) {
        topCalories = calories;
        topElf = elf + 1;
    }
});

console.log("Top Elf: #" + topElf + " | Total Calories: " + topCalories);