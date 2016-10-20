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
        if (idx > this.size - 1) throw 'Index out of range';
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
        if (idx > this.size - 1) throw 'Index out of range';
        let i = Math.trunc(idx / 31);
        let b = idx % 31;
        return (this.arr[i] & 1 << b) > 0;
    }
    toString() {
        let r = '';
        for (let i = 0; i < this.size; i++) {
            r += this.get(i) ? 1 : 0;
        }
        return r;
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
    constructor(p) {
        if (typeof p === 'number') {
            this.size = size;
            this.bitset = new BitSet(size);
        } else {
            this.size = p.length;
            this.bitset = new BitSet(p);
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
}
let bloom = new BloomFilter('');
let non = ['gx', 'hx', 'jq', 'jx', 'jz', 'mx', 'px', 'qc', 'qj', 'qm', 'qv', 'qx', 'qy', 'qz', 'vb', 'vj', 'vq', 'vx', 'wq', 'wx', 'xj', 'zx', 'buw', 'cex', 'ciy', 'cuh', 'cuw', 'fej', 'feq', 'fih', 'fiw', 'foj', 'foq', 'fup', 'fuw', 'fux', 'fuy', 'gaq', 'gax', 'gej', 'geq', 'giq', 'giw', 'gix', 'giy', 'goj', 'guq', 'guw', 'gux', 'huw', 'jey', 'joq', 'jox', 'juh', 'juq', 'kaq', 'keq', 'kiq', 'kix', 'koq', 'kuq', 'kux', 'mub', 'muw', 'mux', 'nuh', 'piy', 'puv', 'puw', 'qac', 'qaf', 'qag', 'qah', 'qak', 'qap', 'qaq', 'qav', 'qax', 'qay', 'qaz', 'qeb', 'qec', 'qed', 'qef', 'qeg', 'qeh', 'qej', 'qek', 'qem', 'qeq', 'qet', 'qev', 'qew', 'qex', 'qey', 'qez', 'qic', 'qid', 'qif', 'qih', 'qij', 'qik', 'qil', 'qip', 'qiq', 'qiw', 'qix', 'qiz', 'qob', 'qoc', 'qod', 'qof', 'qog', 'qoj', 'qok', 'qol', 'qom', 'qoq', 'qos', 'qot', 'qov', 'qow', 'qox', 'qoy', 'qoz', 'quc', 'quf', 'qug', 'quj', 'quk', 'qup', 'quw', 'qux', 'quz', 'siy', 'tuj', 'vaq', 'viw', 'vuf', 'vuh', 'vuj', 'vuk', 'vup', 'vuq', 'vuw', 'vux', 'vuy', 'weq', 'wiq', 'woq', 'wub', 'wuj', 'wuk', 'wuq', 'wuv', 'wux', 'wuy', 'xaj', 'xak', 'xaq', 'xaw', 'xay', 'xef', 'xeh', 'xej', 'xek', 'xep', 'xew', 'xex', 'xez', 'xij', 'xik', 'xiq', 'xiw', 'xiy', 'xoj', 'xoq', 'xox', 'xuf', 'xug', 'xuh', 'xuj', 'xuk', 'xuq', 'xuw', 'xux', 'xuy', 'yej', 'yeq', 'yex', 'yih', 'yij', 'yiq', 'yiw', 'yix', 'yuw', 'yux', 'zej', 'zex', 'zij', 'zix', 'ziy', 'zoj', 'zuh', 'zuj', 'zuq', 'zuv', 'zux', 'zuy'];
module.exports = {
    test: w => {
        for (let i = 0; i < non.length; i++) {
            if (w.indexOf(non[i]) >= 0) {
                return false
            }
        }
        if (w.length < 2)
            return true;
        if (w.length > 14)
            return false;
        if (w.substring(w.length - 2, w.length) == "'s") 
            w = w.substring(0, w.length - 2)
        if (w.indexOf('\'') != w.lastIndexOf('\''))
            return false;
        return bloom.test(w.toLowerCase());
    }
};
