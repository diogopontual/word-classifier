class BitSet {
    constructor(p) {
        if (typeof p === 'number') {
            this.size = p;
            this.arrSize = Math.ceil(this.size / 8);
            this.arr = new Uint8Array(this.arrSize);
        } else {
            this.size = p.length;
            this.arrSize = Math.ceil(this.size / 8);
            this.arr = new Uint8Array(this.arrSize);
            for (let i = 0; i < p.length; i++) {
                if (p[i] == '1') {
                    this.set(i,true);
                }
            }
        }
    }
    set(idx, value) {
        if (idx > this.size - 1) throw 'Index out of range';
        let i = Math.trunc(idx / 8);
        let b = idx % 8;
        if (value == undefined || value == null)
            this.arr[i] ^= 1 << b;
        else if (value)
            this.arr[i] |= 1 << b;
        else
            this.arr[i] &=~(1 << b);
    }
    get(idx) {
        
        if (idx > this.size - 1) throw 'Index out of range';
        let i = Math.trunc(idx / 8);
        let b = idx % 8;
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
module.exports = BitSet;
