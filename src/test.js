const BloomFilter = require('./bloomfilter');
const Apertator = require('./apertator');
var bloom = new BloomFilter(8 * 72000);
const fs = require('fs');
fs.readFile('../optimized.txt', "utf8", function (err, data) {
    if (err) throw err;
    let word = '';
    for (let i = 0; i < data.length; i++) {
        let l = data[i];
        if (l == '\n') {
            bloom.add(word.toLowerCase());
            word = '';
            continue;
        }
        word += l;
    }
    let str = bloom.toString();
    fs.writeFileSync('./data.txt', bloom.toString(), 'ascii');
    fs.writeFileSync('./data.dat', bloom.stringify(), 'binary');
});