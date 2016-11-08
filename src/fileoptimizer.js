const fs = require('fs');
const stemmer = require('./porterstemmer');
const readline = require('readline');
let fileName = '../words.txt';
let outputFileName = '../optimizedWords.txt';
const chars = 'abcdefghijklmnopqrstuvwxyz';
const consonants = 'bcdfghjklmnpqrstvwxyz';
const vowels = 'aeiou';
const f=/^(anti|non|ir|il|dis|mis|un)/;
const p=/^(counter|pseudo|thermo|after|under|ultra|house|white|black|water|super|cross|radio|photo|green|multi|fire|back|over|head|blue|semi|down|foot|fore|wood|anti|cyto|post|free|non|out|air|bio|mis|up|un)/;
let consumed = 0, produced = 0;
data = fs.readFileSync(fileName, 'utf8');
let arr = data.split('\n');
let obj = {};
arr.forEach(w =>{
    w = stemmer(w.toLowerCase().replace(/'s$/, '').replace(f,'').replace(p,''));
    if (w.length < 3) return;
    if (w.length > 12) return;
    if(w.indexOf("'") >= 0) return;
    obj[w] = true;
});
let optimized = []
for (key in obj) {
    optimized.push(key);
}
console.log('input: ' + arr.length);
console.log('output: ' + optimized.length);
fs.writeFileSync('../optimized.txt', optimized.join('\n'));


