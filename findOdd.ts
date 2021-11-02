export const findOdd = (xs: number[]): number => {
  for (let i = 0; i < xs.length; i++) {
    let testNumber: number = 0;

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
