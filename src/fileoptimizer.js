const fs = require('fs');
const readline = require('readline');
let fileName = '../words.txt';
let outputFileName = '../output.txt';
let consumed = 0, produced = 0;

if (process.argv.length > 2) {
    fileName = process.argv[2];
}

if (process.argv.length > 3) {
    outputFileName = process.argv[3];
}


const reader = readline.createInterface({
    input: fs.createReadStream(fileName)
});

if (fs.existsSync(outputFileName))
    fs.unlinkSync(outputFileName);
let words = {};
reader.on('line', (line) => {
    let processed = line.toLowerCase();
    if(processed.substring(processed.length - 2, processed.length) == "'s"){
        processed = processed.substring(0,processed.length - 2)
    }
    consumed++;
    if (processed.length > 2 && processed.length <= 14 && !words[processed]) {
        produced++;
        fs.appendFileSync(outputFileName, processed + '\n');
        words[processed] = true;
    }
});
reader.on('close', (line) => {
    console.log('consumed: ' + consumed);
    console.log('produced: ' + produced);
    console.log('delta: ' + (consumed - produced));
});


