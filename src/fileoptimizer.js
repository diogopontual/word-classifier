const fs = require('fs');
const readline = require('readline');
let fileName = '../words.txt';
let outputFileName = '../optimizedWords.txt';
let consumed = 0, produced = 0;
function filter(input) {
    input = input.filter((v, i) => {
        return v != null;
    });
    console.log(`input length: ${input.length}`);
    return input;
}
data = fs.readFileSync(fileName, 'utf8');
let input = data.split('\n');
let inputObj = {};
console.log(`input length: ${input.length}`);
console.log('to lowercase');
input = input.map((v, i) => {
    let c = v.toLowerCase();
    if (!inputObj[c]) {
        inputObj[c] = true;
        return c;
    }
    return null;
});
input = filter(input);
console.log('possessive removals');
//Possessive:
let possessiveRegex = /'s$/, t = 0, t1 = 0;
input = input.map((p, c) => {
    if (possessiveRegex.test(p)) {
        t++;
        let n = p.replace(possessiveRegex, '');
        // if (!inputObj[n]) {
        //     t1++;
        //     return p;
        // }
        delete inputObj.v;
        return null;
    }
    return p;
}, 0);
console.log(`possessive(\'s)  ocurrencies: ${t}`)
console.log(`possessive(\'s)  ocurrencies without correspondent: ${t1}`)
input = filter(input);
//Sufix
// console.log('sufix stripping');
// const porterstem = require('./porterstemmer');
// t = 0; t1 = 0;
// input = input.map((p, c) => {
//     let n = porterstem(p);
//     if (p != n) {
//         t++;
//         // if (!inputObj[n]) {
//         //     t1++;
//         //     return p;
//         // }
//         delete inputObj.v;
//         return null;
//     }
//     return p;
// }, 0);
// console.log(`stemmer  ocurrencies: ${t}`)
// console.log(`stemmer  ocurrencies without correspondent: ${t1}`)
// input = filter(input);
// console.log('opposite prefix');
// let oppositeRegex = /^dis|un|in|im|ir|il.*/;
// t = 0, t1 = 0;
// input = input.map((p, c) => {
//     if (oppositeRegex.test(p)) {
//         t++;
//         let n = p.replace(oppositeRegex, '');
//         // if (!inputObj[n]) {
//         //     t1++;
//         //     return p;
//         // }
//         delete inputObj.v;
//         return null;
//     }
//     return p;
// }, 0);
// console.log(`opposite  ocurrencies: ${t}`)
// console.log(`opposite  ocurrencies without correspondent: ${t1}`)
// input = filter(input);
fs.writeFileSync('../optimized.txt',input.join('\n'));