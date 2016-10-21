/**
 * Rewrites each byte of an array of bytes to use just 5 bits;
 * Uses the last 3 (8 values) bits to:
 *    1 - 7: number of repeated zeroes(0x00) those follows the current byte;
 *    8: duplicates the current byte
 */
class Apertator {
    constructor(input) {
        this.arr = input;
    }
    analyze() {
        let arr = this.arr, curr = undefined, count = 0, max = 0, scount = 0, seqs = {}, seq_values = {}, ocurrencies = {};
        for (let i = 0; i < arr.length; i++) {
            if (curr != arr[i] && count > 0) {
                if (count > 1) {
                    scount++;
                    max = Math.max(count, max);
                    if (!seqs[count])
                        seqs['' + count] = 0
                    seqs['' + count]++;
                    if (!seq_values['' + curr])
                        seq_values['' + curr] = 0;
                    seq_values['' + curr]++;
                    count = 0;
                }
            }
            curr = arr[i];
            if (!ocurrencies['' + curr])
                ocurrencies['' + curr] = 0;
            ocurrencies['' + curr]++;
            count++;
        }
        console.log('Biggest sequence: ' + max);
        console.log('Number of sequences: ' + scount);
        console.log('Size distribution: ');
        console.log(JSON.stringify(seqs, null, 8));
        console.log('Seq values: ');
        console.log(JSON.stringify(seq_values, null, 8));
        console.log('ocorrencies: ');
        console.log(JSON.stringify(ocurrencies, null, 8));
    }
    compress() {
        let arr = this.arr;
        let b = arr.reduce((p, c) => {
            return p + ('00000000' + c.toString(2)).slice(-8);
        }, '');
        let w = '', n = [];
        for (let i = 0; i < b.length; i++) {
            if(w.length == 5){
                n.push(Number.parseInt(w,2));
                w = '';
            }
            w += b[i];
        }
        if(w.length > 0){
            n.push(Number.parseInt(w,2));
        }
        let lastUpdatableZeroIdx = 0, seqLen = 0, curr = 0;
        for(let i = 0; i < n.length; i++){
            if((curr != n[i] && seqLen > 0) || seqLen == 7){
                seqLen = 0;
            }
            curr == n[i];
        }


    }
    decompress() {

    }
    save() { }
}
module.exports = Apertator;
let a = new Apertator([20,0,0,0,0,0,16,0,0,0]);
a.compress();
