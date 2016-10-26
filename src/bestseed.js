const fs = require('fs');
fs.readFile(process.argv[2],'ascii',(err,data)=>{
    let arr = data.split('\n'), max = 0, lmax = 0, value = 0;
    for(let i = 0; i < arr.length; i  += 2){
        if(!arr[i+1])
            break;
        max = Math.max(parseFloat(arr[i+1]),max);
        if(max != lmax){
            value = arr[i];
        }
        lmax = max;
    }
    console.log(`The winner is ${value} with ${max}%`);

}); 