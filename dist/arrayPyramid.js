"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pyramid = void 0;
function pyramid(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let arrInts = [];
        if (n === 0) {
            return [];
        }
        for (let j = 1; j <= i; j++) {
            arrInts.push(1);
        }
        arr.push(arrInts);
    }
    return arr;
}
exports.pyramid = pyramid;
console.log(pyramid(2));
