"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
class G964 {
}
exports.G964 = G964;
G964.nbYear = (p0, percent, aug, p) => {
    percent = percent / 100;
    let years = 0;
    for (let i = 1; p0 < p; i++) {
        p0 = p0 + p0 * percent + aug;
        years = i;
    }
    return years;
};
G964.nbYear(1500000, 0, 10000, 2000000);
