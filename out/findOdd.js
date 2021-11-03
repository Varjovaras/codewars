"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOdd = void 0;
const findOdd = (xs) => {
    for (let i = 0; i < xs.length; i++) {
        let testNumber = 0;
        for (let j = 0; j < xs.length; j++) {
            if (xs[j] === xs[i]) {
                testNumber++;
            }
        }
        if (testNumber % 2 !== 0) {
            return xs[i];
        }
    }
    return 0;
};
exports.findOdd = findOdd;
