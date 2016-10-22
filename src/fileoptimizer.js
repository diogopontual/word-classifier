const fs = require('fs');
const stemmer = require('./porterstemmer');
const readline = require('readline');
let fileName = '../words.txt';

let outputFileName = '../optimizedWords.txt';
const chars = 'abcdefghijklmnopqrstuvwxyz';
const consonants = 'bcdfghjklmnpqrstvwxyz';
const vowels = 'aeiou';

let consumed = 0, produced = 0;
data = fs.readFileSync(fileName, 'utf8');
let arr = data.split('\n');
let obj = {};
arr.forEach(v => {
    v = v.toLowerCase();
    v = v.replace(/'s$/, '').replace(/^ir/, '').replace(/^il/, '').replace(/^dis/, '').replace(/^mid/, '').replace(/^mis/, '').replace(/^anti/, '').replace(/^in/, '').replace(/^un/, '')
    v = stemmer(v);
    if (v.length < 3) return;
    if (v.length > 14) return;
    obj[v] = true;
});
let optimized = []
for (key in obj) {
    optimized.push(key);
}
console.log('input: ' + arr.length);
console.log('output: ' + optimized.length);
fs.writeFileSync('../optimized.txt', optimized.join('\n'));


