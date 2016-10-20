const BitSet = require('./bitset');

const toBinString = function (str) {
    for (let i = 0; i < str.length; i++) {

    }
}

const hashs = {
    djb2: function (input) {
        let r = 5381;
        for (let i = 0; i < input.length; i++) {
            r = ((r << 5) + r) + input.charCodeAt(i);
        }
        return Math.abs(r);
    }
};
class BloomFilter {
    constructor(size) {
        this.size = size;
        this.bitset = new BitSet(size);
    }
    add(value) {
        for (let key in hashs) {
            let h = hashs[key](value);
            this.bitset.set(h % this.size, true);
        }
    }
    test(value) {
        for (let key in hashs) {
            let h = hashs[key](value);
            return this.bitset.get(h % this.size);
        }
    }
    hash(value) {
        var hash = 0, i, chr, len;
        if (this.length === 0) return hash;
        for (i = 0, len = this.length; i < len; i++) {
            chr = this.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    };
    toString() {
        return this.bitset.toString();
    };
    stringify() {
        let input = this.toString();
        let word = '';
        let r = '';
        for (let i = 0; i < input.length; i++) {
            word += input[i];
            if (word.length == 32) {
                r += String.fromCharCode(Number.parseInt(word, 2));
                word = '';
            }

        }
        return r;
    }
}
module.exports = BloomFilter;
let bf = new BloomFilter(3000000);