"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = void 0;
const likes = (a) => {
    let likes = '';
    if (a.length === 0) {
        likes = 'no one likes this';
    }
    else if (a.length === 1) {
        likes = `${a[0]} likes this`;
    }
    else if (a.length === 2) {
        likes = `${a[0]} and ${a[1]} like this`;
    }
    else if (a.length === 3) {
        likes = `${a[0]}, ${a[1]} and ${a[2]} like this`;
    }
    else if (a.length > 3) {
        likes = `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }
    console.log(likes);
    return likes;
};
exports.likes = likes;
(0, exports.likes)(['Alex', 'Jacob', 'Mark', 'Max']);
