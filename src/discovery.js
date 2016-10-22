const fs = require('fs')
const chars = 'abcdefghijklmnopqrstuvwxyz';
const consonants = 'bcdfghjklmnpqrstvwxyz';
const vowels = 'aeiou';
const combinations = {};
let possibilities = 'cv';
for(let i1 = 3; i1 < 14; i++){

}
// fs.readFile('../optimized.txt', 'ascii', function (err, data) {
//     if (err)
//         console.log(err);
//     let arr = data.split('\n');
//     let knowledge = {
//         maxConsonants: 0,
//         maxVowels: 0,
//         maxConsonantsL14: 0,
//         maxVowelsL14: 0,
//     }
//     for (let i1 = 0; i1 < arr.length; i1++) {
//         let w = arr[i1], c = 0, v = 0;
//         for (let i2 = 0; i2 < w.length; i2++) {
//             let l = w[i2];
//             if (vowels.indexOf(l) >= 0) {
//                 v++;
//             } else if (consonants.indexOf(l) >= 0) {
//                 c++;
//             }
//             knowledge.maxConsonants = Math.max(knowledge.maxConsonants, c);
//             knowledge.maxVowels = Math.max(knowledge.maxVowels, v);
//             if (w.length < 14) {
//                 knowledge.maxConsonantsL14 = Math.max(knowledge.maxConsonantsL14, c);
//                 knowledge.maxVowelsL14 = Math.max(knowledge.maxVowelsL14, v);
//             }
//         }
//     }
//     console.log(JSON.stringify(knowledge, null, 8));
// });