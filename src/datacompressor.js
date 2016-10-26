const fs = require('fs');
let data = fs.readFileSync('./data');
let head = fs.readFileSync('./head.js');
let output = Buffer.concat([data,head]);
fs.writeFileSync('./data.dat',output.toString('binary'),'binary');