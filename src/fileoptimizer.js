const fs = require('fs');
const stemmer = require('./porterstemmer');
const readline = require('readline');
let fileName = '../words.txt';
let outputFileName = '../optimizedWords.txt';
const chars = 'abcdefghijklmnopqrstuvwxyz';
const consonants = 'bcdfghjklmnpqrstvwxyz';
const vowels = 'aeiou';
const p=/^(straight|counter|quarter|feather|weather|thunder|spectro|magneto|finger|candle|double|bitter|breast|cheese|letter|yellow|bridge|school|master|wonder|middle|immuno|silver|pseudo|street|butter|needle|summer|spring|ground|copper|thermo|after|stone|snake|birth|horse|space|honey|under|goose|flood|ultra|watch|bread|river|field|night|house|amino|match|rough|broad|turbo|thorn|white|black|water|blind|super|thumb|chemo|cross|coach|brick|supra|break|blood|paper|earth|radio|photo|flash|sound|merri|green|train|brush|video|multi|ferro|brain|waste|sheep|motor|track|grass|sword|short|sweet|quick|ethno|pluri|table|copy|body|fire|tool|wire|half|type|kilo|back|door|over|play|head|lady|gate|blue|semi|life|road|hair|deer|nose|mail|down|moon|foot|ring|shoe|book|fore|duck|wing|grey|frog|iron|high|boat|gray|bone|echo|hang|dead|kick|work|lime|nano|snow|rain|rail|dust|ship|push|sero|news|song|keel|wine|soap|neck|wood|stop|bird|rheo|milk|tear|fine|seed|muck|non|out|fly|day|eye|sky|fox|air|ice|oil|oak|lay|ink|ovo|up)/;
let consumed = 0, produced = 0;
data = fs.readFileSync(fileName, 'utf8');
let arr = data.split('\n');
let obj = {};
arr.forEach(w => {
    w = stemmer(w.toLowerCase().replace(/'s$/, '').replace(p,''));
    if (w.length < 3) return;
    if (w.length >= 13) return;
    obj[w] = true;
});
let optimized = []
for (key in obj) {
    optimized.push(key);
}
console.log('input: ' + arr.length);
console.log('output: ' + optimized.length);
fs.writeFileSync('../optimized.txt', optimized.join('\n'));


