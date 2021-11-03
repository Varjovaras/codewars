'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.digitalRoot = void 0;
const digitalRoot = (n) => {
  let digits = n.toString().length;
  let root = n;
  while (root >= 10) {
    root = 0;
    for (let i = 1; i <= digits; i++) {
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
