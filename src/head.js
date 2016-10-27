f=/^(non|ir|il|dis|mis|un)/,p=/^(straight|counter|quarter|feather|weather|thunder|spectro|magneto|finger|candle|double|bitter|breast|cheese|letter|yellow|bridge|school|master|wonder|middle|immuno|silver|pseudo|street|butter|needle|summer|spring|ground|copper|thermo|after|stone|snake|birth|horse|space|honey|under|goose|flood|ultra|watch|bread|river|field|night|house|amino|match|rough|broad|turbo|thorn|white|black|water|blind|super|thumb|chemo|cross|coach|brick|supra|break|blood|paper|earth|radio|photo|flash|sound|merri|green|train|brush|video|multi|ferro|brain|waste|sheep|motor|track|grass|sword|short|sweet|quick|ethno|pluri|table|copy|body|fire|tool|wire|half|type|kilo|back|door|over|play|head|lady|gate|blue|semi|life|road|hair|deer|nose|mail|down|moon|foot|ring|shoe|book|fore|duck|wing|grey|frog|iron|high|boat|gray|bone|echo|hang|dead|kick|work|lime|nano|snow|rain|rail|dust|ship|push|sero|news|song|keel|wine|soap|neck|wood|stop|bird|rheo|milk|tear|fine|seed|muck|non|out|fly|day|eye|sky|fox|air|ice|oil|oak|lay|ink|ovo|up)/,n=/^[yxjhowz].*q$|sx|px|yy|j[qxz]|q[jxyz']|v[jq]|zx|'[jqxyz's]|d[xq]|hx|lll|tq|v[fzm]|[^eioauy']{5}|'[^s]|sss|w[xqj]|x[jzkqgxr]|j[^'srodeianu]|q[^iu]|bx/,nb=/^(b[qx]|c[jq']|f[kvxz']|g[qvxq]|hx|hz|jj|k[xz]|lk|lq|mq|nq|p[jqx']|q[cfghpv]|r[xz']|sx|u[oq']|v[bkwz']|w[gz']|x[glq]|y[jkxyz]|z[cdfgjqv]|[zabcdefghiklmnoprstuvw]')/,ne=/([abcfgjszhlmnprstuvw]'|cs|ds|fs|g[jsz]|hj|j[bfhprsvwy']|kq|ks|kz|mq|pz|q[bkopstw]|tq|vk|vz|wq|x[bgnqsy']|y[jqy]|z[bfgjmpqsy']|'[bcfghkopsuw])$/,l=[0,0,0,3,4,5,6,6,6,6,7,8,8,0,0,0],d=function(t){for(var a=50907,h=0;h<t.length;h++)a=(a<<5)+a+t.charCodeAt(h);return Math.abs(a)}, BS=function(t){this.s=t.length,this.as=Math.ceil(this.s/31),this.arr=new Uint32Array(this.as);for(let i=0;i<t.length;i++)"1"==t[i]&&this.set(i,!0)}; BF=function(t){this.s=t.length,this.bt=new BS(t)};BF.prototype.t=function(t){let e=d(t);return this.bt.get(e%this.s)}, st = function () { var a = { ational: "ate", tional: "tion", enci: "ence", anci: "ance", izer: "ize", bli: "ble", alli: "al", entli: "ent", eli: "e", ousli: "ous", ization: "ize", ation: "ate", ator: "ate", alism: "al", iveness: "ive", fulness: "ful", ousness: "ous", aliti: "al", iviti: "ive", biliti: "ble", logi: "log" }, b = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" }, c = "[^aeiou]", d = "[aeiouy]", e = c + "[^aeiouy]*", f = d + "[aeiou]*", g = "^(" + e + ")?" + f + e, h = "^(" + e + ")?" + f + e + "(" + f + ")?$", i = "^(" + e + ")?" + f + e + f + e, j = "^(" + e + ")?" + d; return function (c) { var f, k, l, m, n, o, p; if (c.length < 3) return c; if (l = c.substr(0, 1), "y" == l && (c = l.toUpperCase() + c.substr(1)), m = /^(.+?)(ss|i)es$/, n = /^(.+?)([^s])s$/, m.test(c) ? c = c.replace(m, "$1$2") : n.test(c) && (c = c.replace(n, "$1$2")), m = /^(.+?)eed$/, n = /^(.+?)(ed|ing)$/, m.test(c)) { var r = m.exec(c); m = new RegExp(g), m.test(r[1]) && (m = /.$/, c = c.replace(m, "")) } else if (n.test(c)) { var r = n.exec(c); f = r[1], n = new RegExp(j), n.test(f) && (c = f, n = /(at|bl|iz)$/, o = new RegExp("([^aeiouylsz])\\1$"), p = new RegExp("^" + e + d + "[^aeiouwxy]$"), n.test(c) ? c += "e" : o.test(c) ? (m = /.$/, c = c.replace(m, "")) : p.test(c) && (c += "e")) } if (m = /^(.+?)y$/, m.test(c)) { var r = m.exec(c); f = r[1], m = new RegExp(j), m.test(f) && (c = f + "i") } if (m = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, m.test(c)) { var r = m.exec(c); f = r[1], k = r[2], m = new RegExp(g), m.test(f) && (c = f + a[k]) } if (m = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, m.test(c)) { var r = m.exec(c); f = r[1], k = r[2], m = new RegExp(g), m.test(f) && (c = f + b[k]) } if (m = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, n = /^(.+?)(s|t)(ion)$/, m.test(c)) { var r = m.exec(c); f = r[1], m = new RegExp(i), m.test(f) && (c = f) } else if (n.test(c)) { var r = n.exec(c); f = r[1] + r[2], n = new RegExp(i), n.test(f) && (c = f) } if (m = /^(.+?)e$/, m.test(c)) { var r = m.exec(c); f = r[1], m = new RegExp(i), n = new RegExp(h), o = new RegExp("^" + e + d + "[^aeiouwxy]$"), (m.test(f) || n.test(f) && !o.test(f)) && (c = f) } return m = /ll$/, n = new RegExp(i), m.test(c) && n.test(c) && (m = /.$/, c = c.replace(m, "")), "y" == l && (c = l + c.substr(1)), c } } ();BS.prototype.set=function(t,r){let i=Math.trunc(t/31),h=t%31;void 0==r||null==r?this.arr[i]^=1<<h:r?this.arr[i]|=1<<h:this.arr[i]&=~(1<<h)},BS.prototype.get=function(t){let r=Math.trunc(t/31),i=t%31;return(this.arr[r]&1<<i)>0};