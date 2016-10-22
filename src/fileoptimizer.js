const fs = require('fs');
const stemmer = require('./porterstemmer');
const readline = require('readline');
let fileName = '../words.txt';

let outputFileName = '../optimizedWords.txt';
const chars = 'abcdefghijklmnopqrstuvwxyz';
const consonants = 'bcdfghjklmnpqrstvwxyz';
const vowels = 'aeiou';
const p = /^(ir|il|dis|mid|mis|anti|in|un)/;
let consumed = 0, produced = 0;
data = fs.readFileSync(fileName, 'utf8');
let arr = data.split('\n');
let obj = {};
arr.forEach(w => {
    w = w.toLowerCase();
    w = w.replace(/'s$/, '').replace(p, '');
    w = stemmer(w);
    if (w.length < 3) return;
    if (w.length > 14) return;
    obj[w] = true;
});
let optimized = []
for (key in obj) {
    optimized.push(key);
}
console.log('input: ' + arr.length);
console.log('output: ' + optimized.length);
fs.writeFileSync('../optimized.txt', optimized.join('\n'));


