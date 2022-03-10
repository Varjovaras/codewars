export function pyramid(n: number) {
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

console.log(pyramid(2));
