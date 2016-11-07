const hash = function (w) {
    let r = 2010;
    for (let i = 0; i < w.length; i++) {
        r = ((r << 5) + r) + w.charCodeAt(i);
    }
    return Math.abs(r);
}
const bloomFilter = function () {
    let retVal = Object.create(bloomFilterProto);
    if (typeof arguments[0] === 'number') {
        retVal.size = arguments[0];
        retVal.arr = new Uint8Array(retVal.size / 8);
    } else {
        console.log(arguments[0].length);
        retVal.size = arguments[0].length;
        retVal.arr = arguments[0];
    }

    return retVal;
}
const bloomFilterProto = {
    add: function (w) {
        let bit = (hash(w) % this.size), baite = Math.trunc(bit / 8);
        this.arr[baite] |= 1 << (bit % 8);

    },
    test: function (w) {
        let bit = (hash(w) % this.size), baite = Math.trunc(bit / 8);
        return (this.arr[baite] & (1 << (bit % 8))) > 0
    },
};
module.exports = bloomFilter;
