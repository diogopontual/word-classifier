const fs = require('fs'), letters = 'abcdefghijklmnopqrstuvwxyz\'';
let data = fs.readFileSync('../optimized.txt', 'ascii');
let arr = data.split('\n');
set = new Set();
arr1 = []
arr.forEach(v=>{
    if(v.length == 3){
        if(!set.has(v.toLowerCase()))
            arr1.push(v.toLowerCase());
        set.add(v.toLowerCase());
    }
});
fs.writeFileSync('./three.json','t=/(' + arr1.join('|') + ')/');



