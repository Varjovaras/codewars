export const digitalRoot = (n: number): number => {
  let digits: number = n.toString().length;
  let root: number = n;
  while (root >= 10) {
    root = 0;
    for (let i = 1; i <= digits; i++) {
      root += n % 10;
      n = (n - (n % 10)) / 10;
    }
    n = root;
  }
  console.log(root);
  return root;
};
digitalRoot(456);
