/**
 * Rewrites each byte of an array of bytes to use just 5 bits;
 * Uses the last 3 (8 values) bits to:
 *    1 - 7: number of repeated zeroes(0x00) those follows the current byte;
 *    8: duplicates the current byte
 */
class Apertator {
    constructor(input) {
        this.input = input;
    }
    compress() {
        let input = this.input, first = input[0], curr = undefined, count = 0, r = [];
        for(let i = 0; i < input.length; i++){
            if(curr != input[i] && count > 0){
                r.push(count);
                count = 0;
            }
            curr = input[i];
            count++;
        }
        let b = Buffer.from(r);
        return b.toString();
    }
    decompress() {

    }
    save() { }
}
module.exports = Apertator;
let a = new Apertator([20,0,0,0,0,0,16,0,0,0]);
a.compress();
