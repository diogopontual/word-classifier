const fs = require('fs');
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
    let f = '';
    for (let i = 0; i < v.length; i++) {
        if (vowels.indexOf(v[i]) >= 0) f += 'v';
        else if (consonants.indexOf(v[1]) >= 0) f += 'c';
    }
    if (/ccccc/.test(f) || /vvvvv/.test(f)) return;
    v = v.replace(/'s$/, '').replace(/^ir/,'').replace(/^il/,'').replace(/^dis/,'').replace(/^mid/,'').replace(/^mis/,'').replace(/^anti/,'').replace(/^in/,'').replace(/^in/, '').replace(/^un/, '').replace(/sses$/,'ss').replace(/ies$/,'i').replace(/ss$/,/s/).replace(/s$/,'').replace(/ing$/, '');
    if (v.length < 2) return;
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