const fs = require('fs');
const fileData = fs.readFileSync('../words.txt', 'ascii');
const wordsArr = fileData.split('\n');
const wordsSet = new Set(wordsArr);
const prefixLength = parseInt(process.argv[2]);
const sensibility = parseInt(process.argv[3]);
const prefixes = {};
wordsArr.forEach(word => {
    word = word.toLowerCase().replace(/'s$/, '');
    if (word.length < prefixLength + 2)
        return;
    let wordPrefix = word.substring(0, prefixLength);
    if (!prefixes[wordPrefix]) {
        prefixes[wordPrefix] = { prefix: wordPrefix, count: 0, errors: 0 };
    }
    prefixes[wordPrefix].count++;
    if (!wordsSet.has(word.replace(wordPrefix, '')))
        prefixes[wordPrefix].errors++;
});
const prefixArr = [];
for (let obj in prefixes) {
    if (prefixes[obj].count > 200)
        prefixArr.push(prefixes[obj]);
}

prefixArr.sort(function (a, b) {
    let ap = 100 / a.count * a.errors;
    let bp = 100 / b.count * b.errors;
    if (ap < bp)
        return -1;
    if (ap == bp) {
        if (a.count < b.count)
            return -1
        return 0;
    }
    return 1;

});
let str = '';
let o = '';
prefixArr.forEach(v=>{
    if(100/v.count*v.errors<sensibility){
        str += `|${v.prefix}`;
        
    }
});
fs.appendFileSync('result.txt', str, null, 4);