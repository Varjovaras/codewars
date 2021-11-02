"use strict";
exports.__esModule = true;
exports.digitalRoot = void 0;
var digitalRoot = function (n) {
    var digits = n.toString().length;
    var root = n;
    while (root >= 10) {
        root = 0;
        for (var i = 1; i <= digits; i++) {
            root += n % 10;
            console.log('root :D', root);
            n = (n - (n % 10)) / 10;
        }
        n = root;
    }
    console.log(root);
    return root;
};
exports.digitalRoot = digitalRoot;
(0, exports.digitalRoot)(456);
