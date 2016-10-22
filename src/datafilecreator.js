const BloomFilter = require('./bloomfilter');
var bloom = new BloomFilter(8 * process.argv[2]);
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
    fs.writeFileSync('./data', Buffer.from(bloom.stringify()).toString('binary'), 'binary');
});