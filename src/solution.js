const n = ['jq', 'jx', 'jz', 'qj', 'qx', 'qy', 'qz', 'q\'', 'vj', 'vq', 'xj', 'zx', '\'j', '\'q', '\'x', '\'z'];
let bloom;
module.exports = {
	init: b => {
		let str = '';
		for (let i = 0; i < b.length; i++) {
			for (let i1 = 7; i1 >= 0; i1--) {
				str += ((b[i] >> i1 & 1) == 1 ? '1' : '0');
			}
		}
		bloom = new BloomFilter(str);
	},
	test: w => {
		w = w.toLowerCase();
		w = w.replace(/'s$/, '').replace(/^ir/, '').replace(/^il/, '').replace(/^dis/, '').replace(/^mid/, '').replace(/^mis/, '').replace(/^anti/, '').replace(/^in/, '').replace(/^un/, '');
		w = stemmer(w);
		if (w.length > 14) return;
		for (let i = 0; i < n.length; i++) {
			if (w.indexOf(n[i]) >= 0) return false;
		}
		return bloom.test(w);
	}
};
const hashs={djb2:function(t){for(var a=5381,h=0;h<t.length;h++)a=(a<<5)+a+t.charCodeAt(h);return Math.abs(a)}};
const BitSet=function(t){this.size=t.length,this.arrSize=Math.ceil(this.size/31),this.arr=new Uint32Array(this.arrSize);for(let i=0;i<t.length;i++)"1"==t[i]&&this.set(i,!0)};
const BloomFilter=function(t){"number"==typeof t?(this.size=size,this.bitset=new BitSet(size)):(this.size=t.length,this.bitset=new BitSet(t))};BloomFilter.prototype.test=function(t){let e=hashs.djb2(t);return this.bitset.get(e%this.size)};
BitSet.prototype.set=function(t,r){if(t>this.size-1)throw"";let i=Math.trunc(t/31),h=t%31;void 0==r||null==r?this.arr[i]^=1<<h:r?this.arr[i]|=1<<h:this.arr[i]&=~(1<<h)},BitSet.prototype.get=function(t){if(t>this.size-1)throw"";let r=Math.trunc(t/31),i=t%31;return(this.arr[r]&1<<i)>0};
const stemmer = function () { var a = { ational: "ate", tional: "tion", enci: "ence", anci: "ance", izer: "ize", bli: "ble", alli: "al", entli: "ent", eli: "e", ousli: "ous", ization: "ize", ation: "ate", ator: "ate", alism: "al", iveness: "ive", fulness: "ful", ousness: "ous", aliti: "al", iviti: "ive", biliti: "ble", logi: "log" }, b = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" }, c = "[^aeiou]", d = "[aeiouy]", e = c + "[^aeiouy]*", f = d + "[aeiou]*", g = "^(" + e + ")?" + f + e, h = "^(" + e + ")?" + f + e + "(" + f + ")?$", i = "^(" + e + ")?" + f + e + f + e, j = "^(" + e + ")?" + d; return function (c) { var f, k, l, m, n, o, p; if (c.length < 3) return c; if (l = c.substr(0, 1), "y" == l && (c = l.toUpperCase() + c.substr(1)), m = /^(.+?)(ss|i)es$/, n = /^(.+?)([^s])s$/, m.test(c) ? c = c.replace(m, "$1$2") : n.test(c) && (c = c.replace(n, "$1$2")), m = /^(.+?)eed$/, n = /^(.+?)(ed|ing)$/, m.test(c)) { var r = m.exec(c); m = new RegExp(g), m.test(r[1]) && (m = /.$/, c = c.replace(m, "")) } else if (n.test(c)) { var r = n.exec(c); f = r[1], n = new RegExp(j), n.test(f) && (c = f, n = /(at|bl|iz)$/, o = new RegExp("([^aeiouylsz])\\1$"), p = new RegExp("^" + e + d + "[^aeiouwxy]$"), n.test(c) ? c += "e" : o.test(c) ? (m = /.$/, c = c.replace(m, "")) : p.test(c) && (c += "e")) } if (m = /^(.+?)y$/, m.test(c)) { var r = m.exec(c); f = r[1], m = new RegExp(j), m.test(f) && (c = f + "i") } if (m = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, m.test(c)) { var r = m.exec(c); f = r[1], k = r[2], m = new RegExp(g), m.test(f) && (c = f + a[k]) } if (m = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, m.test(c)) { var r = m.exec(c); f = r[1], k = r[2], m = new RegExp(g), m.test(f) && (c = f + b[k]) } if (m = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, n = /^(.+?)(s|t)(ion)$/, m.test(c)) { var r = m.exec(c); f = r[1], m = new RegExp(i), m.test(f) && (c = f) } else if (n.test(c)) { var r = n.exec(c); f = r[1] + r[2], n = new RegExp(i), n.test(f) && (c = f) } if (m = /^(.+?)e$/, m.test(c)) { var r = m.exec(c); f = r[1], m = new RegExp(i), n = new RegExp(h), o = new RegExp("^" + e + d + "[^aeiouwxy]$"), (m.test(f) || n.test(f) && !o.test(f)) && (c = f) } return m = /ll$/, n = new RegExp(i), m.test(c) && n.test(c) && (m = /.$/, c = c.replace(m, "")), "y" == l && (c = l.toLowerCase() + c.substr(1)), c } } ();