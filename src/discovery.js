const fs = require('fs'), letters = 'abcdefghijklmnopqrstuvwxyz\'';
let data = fs.readFileSync('../optimized.txt', 'ascii');
let arr = data.split('\n');
entire = [];
begin = [];
end = [];
regex = /^[yxjhowz].*q$|sx|px|yy|j[qxz]|q[jxyz']|v[jq]|zx|'[jqxyz's]|d[xq]|hx|lll|tq|v[fzm]|[^eyuioa']{5}|'[^s]|sss|w[xqj]|x[jzkqgxr]|j[^'adeinorsu]|q[^iu]|bx/
for (let i1 = 0; i1 < letters.length; i1++) {
console.log(i1);    
    for (let i2 = 0; i2 < letters.length; i2++) {
        console.log('\t' + i2);
        for (let i3 = 0; i3 < letters.length; i3++) {
            console.log('\t\t' + i3);
            let occurs = false, atBegin = false; atEnd = false, fl = false;
            let part = letters[i1] + letters[i2] + letters[i3];
            for (i4 = 0; i4 < arr.length; i4++) {
                word = arr[i4];
                if (word.indexOf(part) >= 0)
                    occurs = true;
                if (word.indexOf(part) == 0)
                    atBegin = true;
                if (word.indexOf(part) == word.length - 2)
                    atEnd = true;
            }
            if (!occurs) {
                entire.push(part);
                if (!regex.test(part))
                    fs.appendFileSync('./part.txt',part + '|');
            } else {
                if (!atBegin)
                    begin.push(part);
                if (!atEnd)
                    end.push(part);
            }
        }
    }
}