const fs = require('fs');
const fileData = fs.readFileSync('../optimized.txt', 'ascii');
const wordsArr = fileData.split('\n');
const wordsSet = new Set(wordsArr);
const sensibility = parseInt(process.argv[3]);
const prefixes = {};
wordsArr.forEach(word => {
    word = word.toLowerCase().replace(/'s$/, '');
    for (let prefixLength = 2; prefixLength <= 5; prefixLength++) {
        if (word.length < prefixLength + 2)
            return;
        let wordPrefix = word.substring(0, prefixLength);
        if (!prefixes[wordPrefix]) {
            prefixes[wordPrefix] = { prefix: wordPrefix, words: new Set() };
        }
        prefixes[wordPrefix].words.add(word.replace(wordPrefix, ''));
    }
});


const similarity = [];
for (let obj1 in prefixes) {
    let a1 = prefixes[obj1];
    for (let obj2 in prefixes) {
        let s = 0;
        let a2 = prefixes[obj2]
        if (a1 != a2)
            for (let w1 of a1.words) {
                for (let w2 of a2.words) {
                    if (w1 == w2) {
                        s++;
                        break;
                    }
                }
            }
        if (s > 300)
            fs.appendFileSync('result.txt', JSON.stringify({ a1: a1, a1l: a1.words.size, a2: a2, a2l: a2.words.size, s: s }, null, 4));
    }
}

