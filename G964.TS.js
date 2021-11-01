"use strict";
exports.__esModule = true;
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.nbYear = function (p0, percent, aug, p) {
        percent = percent / 100;
        var years;
        for (var i = 1; p0 < p; i++) {
            p0 = p0 + p0 * percent + aug;
            years = i;
        }
        console.log(years);
        return years;
    };
    return G964;
}());
exports.G964 = G964;
G964.nbYear(1500000, 0, 10000, 2000000);
