const bloomFilter = require('./bloomfilter');
const inputFile = '../optimized.txt';
const outputFile = './data';
var bloom = bloomFilter(8 * process.argv[2]);
const fs = require('fs');
fs.readFile(inputFile, "ascii", function (err, data) {
    if (err) throw err;
    let arr = data.split('\n');
    arr.forEach(w => {
        bloom.add(w)
    });
    fs.writeFileSync(outputFile, Buffer.from(bloom.arr).toString('binary'), 'binary');
});
