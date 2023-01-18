const fs = require('fs');
const inputFile = fs.readFileSync('input.txt', 'utf-8');
var answer = 0;

inputFile.split(/\r?\n/).forEach(line => {
    for (let i = 0; i <= (line.length - 4); i++) {
        let currentPacket = line.slice(i, (i+4));
        if (uniqueCharacters(currentPacket)) {
            answer = i+4; // end of currentPacket
            break;
        }
        
    }
    
});

console.log(answer);

function uniqueCharacters(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                return false;
            }
        }  
    }
    
    return true;
}