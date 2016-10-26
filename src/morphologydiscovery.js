const fs = require('fs');
let data = fs.readFileSync('../optimized.txt', 'ascii');
let arr = data.split('\n');
let consonants = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let vowels = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
arr.forEach(w => {
    let m = w.toLowerCase().replace(/[aeiou]/g, 'a').replace(/[bcdfghjklmnpqrstvwxyz]/g, 'c');
    consonants[w.length] = Math.max(consonants[w.length],(m.match(/c/g) ? m.match(/c/g).length : 0));
    vowels[w.length] = Math.max(vowels[w.length],(m.match(/a/g) ? m.match(/a/g).length : 0));
});
console.log(vowels);
console.log(consonants);



