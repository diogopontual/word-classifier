const n = ['jq', 'jx', 'jz', 'qj', 'qx', 'qy', 'qz', 'q\'', 'vj', 'vq', 'xj', 'zx', '\'j', '\'q', '\'x', '\'z'], consonants = 'bcdfghjklmnpqrstvwxyz', vowels = 'aeiou',
	hashs = {
		djb2: function (input) {
			let r = 5381;
			for (let i = 0; i < input.length; i++) {
				r = ((r << 5) + r) + input.charCodeAt(i);
			}
			return Math.abs(r);
		}
	};
let bloom;
class BitSet {
	constructor(p) {
		this.size = p.length;
		this.arrSize = Math.ceil(this.size / 31);
		this.arr = new Uint32Array(this.arrSize);
		for (let i = 0; i < p.length; i++) {
			if (p[i] == '1') {
				this.set(i, true);
			}
		}
	}
	set(idx, value) {
		if (idx > this.size - 1) throw '';
		let i = Math.trunc(idx / 31);
		let b = idx % 31;
		if (value == undefined || value == null)
			this.arr[i] ^= 1 << b;
		else if (value)
			this.arr[i] |= 1 << b;
		else
			this.arr[i] &= ~(1 << b);
	}
	get(idx) {
		if (idx > this.size - 1) throw '';
		let i = Math.trunc(idx / 31);
		let b = idx % 31;
		return (this.arr[i] & 1 << b) > 0;
	}
}
class BloomFilter {
	constructor(p) {
		if (typeof p === 'number') {
			this.size = size;
			this.bitset = new BitSet(size);
		} else {
			this.size = p.length;
			this.bitset = new BitSet(p);
		}
	}
	test(v) {
		let h = hashs.djb2(v);
		return this.bitset.get(h % this.size);
	}
}
module.exports = {
	init: b => {
		let str = '';
		for (let i = 0; i < b.length; i++) {
			str += ((b[i] >> 7 & 1) == 1 ? '1' : '0');
			str += ((b[i] >> 6 & 1) == 1 ? '1' : '0');
			str += ((b[i] >> 5 & 1) == 1 ? '1' : '0');
			str += ((b[i] >> 4 & 1) == 1 ? '1' : '0');
			str += ((b[i] >> 3 & 1) == 1 ? '1' : '0');
			str += ((b[i] >> 2 & 1) == 1 ? '1' : '0');
			str += ((b[i] >> 1 & 1) == 1 ? '1' : '0');
			str += ((b[i] >> 0 & 1) == 1 ? '1' : '0');
		}
		bloom = new BloomFilter(str);
	},
	test: w => {
		w = w.toLowerCase();
		if (w.length < 2)
			return w !== '\'';
		if (w.length > 14)
			return false;
		if (/\'.{2,}/.test(w)) return false;
		if (/\'[a-rt-z]+$/.test(w)) return false;
		w = w.replace(/'s$/, '').replace(/^ir/, '').replace(/^il/, '').replace(/^dis/, '').replace(/^mid/, '').replace(/^mis/, '').replace(/^anti/, '').replace(/^in/, '').replace(/^in/, '').replace(/^un/, '');
		w = stemmer(w);
		for (let i = 0; i < n.length; i++)
			if (w.indexOf(n[i]) >= 0) return false
		let c = 0, v = 0, m = '';
		for (let i2 = 0; i2 < w.length; i2++) {
			let l = w[i2];
			if (vowels.indexOf(l) >= 0) {
				v++;
				m += 'v';
			} else if (consonants.indexOf(l) >= 0) {
				c++;
				m += 'c';
			}
		}
		if (c > 10 || v > 10) return false;
		if (w.length < 10 && (c > 8 || v > 6)) return false;
		if (w.length < 12 && (c > 9 || v > 6)) return false;
		if (w.length < 14 && (c > 11 || v > 8)) return false;
		if (m.indexOf('cccccc') >= 0) return false;
		if (m.indexOf('vvvvv') >= 0) return false;
		if (!(/cc*v*cc*/.test(m) || /vvv*c*vv*/.test(m))) return false;
		if (/(a|e|i|o|u){4,}.*(a|e|i|o|u){2,}/.test(w)) return false;
		if (/(a|e|i|o|u){2,}.*(a|e|i|o|u){4,}/.test(w)) return false;
		if (/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z){3,}.*(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z){5,}/.test(w)) return false;
		if (/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z){5,}.*(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z){3,}/.test(w)) return false;
		if (/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z){5,}.*(a|e|i|o|u){3,}/.test(w)) return false;
		return bloom.test(w.toLowerCase());
	}
};
var stemmer = function () { var a = { ational: "ate", tional: "tion", enci: "ence", anci: "ance", izer: "ize", bli: "ble", alli: "al", entli: "ent", eli: "e", ousli: "ous", ization: "ize", ation: "ate", ator: "ate", alism: "al", iveness: "ive", fulness: "ful", ousness: "ous", aliti: "al", iviti: "ive", biliti: "ble", logi: "log" }, b = { icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "" }, c = "[^aeiou]", d = "[aeiouy]", e = c + "[^aeiouy]*", f = d + "[aeiou]*", g = "^(" + e + ")?" + f + e, h = "^(" + e + ")?" + f + e + "(" + f + ")?$", i = "^(" + e + ")?" + f + e + f + e, j = "^(" + e + ")?" + d; return function (c) { var f, k, l, m, n, o, p; if (c.length < 3) return c; if (l = c.substr(0, 1), "y" == l && (c = l.toUpperCase() + c.substr(1)), m = /^(.+?)(ss|i)es$/, n = /^(.+?)([^s])s$/, m.test(c) ? c = c.replace(m, "$1$2") : n.test(c) && (c = c.replace(n, "$1$2")), m = /^(.+?)eed$/, n = /^(.+?)(ed|ing)$/, m.test(c)) { var r = m.exec(c); m = new RegExp(g), m.test(r[1]) && (m = /.$/, c = c.replace(m, "")) } else if (n.test(c)) { var r = n.exec(c); f = r[1], n = new RegExp(j), n.test(f) && (c = f, n = /(at|bl|iz)$/, o = new RegExp("([^aeiouylsz])\\1$"), p = new RegExp("^" + e + d + "[^aeiouwxy]$"), n.test(c) ? c += "e" : o.test(c) ? (m = /.$/, c = c.replace(m, "")) : p.test(c) && (c += "e")) } if (m = /^(.+?)y$/, m.test(c)) { var r = m.exec(c); f = r[1], m = new RegExp(j), m.test(f) && (c = f + "i") } if (m = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/, m.test(c)) { var r = m.exec(c); f = r[1], k = r[2], m = new RegExp(g), m.test(f) && (c = f + a[k]) } if (m = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/, m.test(c)) { var r = m.exec(c); f = r[1], k = r[2], m = new RegExp(g), m.test(f) && (c = f + b[k]) } if (m = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/, n = /^(.+?)(s|t)(ion)$/, m.test(c)) { var r = m.exec(c); f = r[1], m = new RegExp(i), m.test(f) && (c = f) } else if (n.test(c)) { var r = n.exec(c); f = r[1] + r[2], n = new RegExp(i), n.test(f) && (c = f) } if (m = /^(.+?)e$/, m.test(c)) { var r = m.exec(c); f = r[1], m = new RegExp(i), n = new RegExp(h), o = new RegExp("^" + e + d + "[^aeiouwxy]$"), (m.test(f) || n.test(f) && !o.test(f)) && (c = f) } return m = /ll$/, n = new RegExp(i), m.test(c) && n.test(c) && (m = /.$/, c = c.replace(m, "")), "y" == l && (c = l.toLowerCase() + c.substr(1)), c } } ();