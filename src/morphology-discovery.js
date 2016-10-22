const fs = require('fs')
const chars = 'abcdefghijklmnopqrstuvwxyz';
const consonants = 'bcdfghjklmnpqrstvwxyz';
const vowels = 'aeiou';
const possibilities = 'cv';

// let stopped = 0;
// let obj = {};
// let created = 0;
// let max = 0, min = 30;
// while (stopped < 10000000) {
//     let q = Math.floor((Math.random() * 10) + 5);
//     str = '';
//     for (let i = 0; i < q; i++) {
//         let d = Math.round(Math.random());
//         str += possibilities[d];
//     }
//     max = Math.max(max, str.length);
//     min = Math.min(min, str.length);
//     if (obj[str] !== false) {
//         obj[str] = false;
//         stopped = 0;
//         created++;
//     } else {
//         stopped++;
//     }
// }

// console.log('criados: ' + created);
// console.log('maior: ' + max);
// console.log('menor: ' + min);
let cons = 0, vow = 0;
fs.readFile('../optimized.txt', 'ascii', function (err, data) {
    if (err)
        console.log(err);
    let arr = data.split('\n');
    for (let i1 = 0; i1 < arr.length; i1++) {
        let w = arr[i1], f = '';
        for (i2 = 0; i2 < w.length; i2++) {
            let l = w[i2];
            if (vowels.indexOf(l) >= 0) f += 'v';
            else if (consonants.indexOf(l) >= 0) f += 'c';
        }
        if(f.indexOf('ccccc') >= 0){
            cons++;
        }else if(f.indexOf('vvvvv') >= 0){
            vow++;
        }
        // obj[f] = true;
    }
    console.log("consoantes: " + cons);
    console.log("vogais: " + vow);
    let count = 0;
    let str = ',';
    // for (key in obj) {
    //     if (!obj[key]){
    //         count++;
    //         str += key + ',';
    //     }
    // }
    // console.log(count);
    // fs.writeFile('./morphology-discovery.txt',str,'ascii');
});


