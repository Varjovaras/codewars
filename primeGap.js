function gap(g, m, n) {
  let prime1 = 0;
  let prime2 = 0;
  let result = [];
  for (m; m < n; m++) {
    if (isPrime(m) && prime1 === 0) {
      prime1 = m;
    } else if (isPrime(m)) {
      prime2 = m;
      if (testGap(prime1, prime2, g)) {
        result.push(prime1, prime2);
        return result;
      } else prime1 = prime2;
    }
  }
  return null;
}

function testGap(prime1, prime2, g) {
  return prime2 - prime1 === g;
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};
