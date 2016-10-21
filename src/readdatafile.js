let fs = require('fs');
fs.readFile('./data.dat', 'binary', function (err, data) {
    if (err) {
        console.log(err);
        return;
    }
    // let b = toBinString(data);
    let b = Buffer.from(data,'binary');
    let str = '';
    for(let i = 0; i < b.length; i++){
        str += ((b[i] >> 7 & 1) == 1 ? '1' : '0');
        str += ((b[i] >> 6 & 1) == 1 ? '1' : '0');
        str += ((b[i] >> 5 & 1) == 1 ? '1' : '0');
        str += ((b[i] >> 4 & 1) == 1 ? '1' : '0');
        str += ((b[i] >> 3 & 1) == 1 ? '1' : '0');
        str += ((b[i] >> 2 & 1) == 1 ? '1' : '0');
        str += ((b[i] >> 1 & 1) == 1 ? '1' : '0');
        str += ((b[i] >> 0 & 1) == 1 ? '1' : '0');
    }
    fs.writeFileSync('./data1.txt',str, 'ascii');
});
