function isPrime(number) {
  if (number === 1 || number === 0) {
    return false;
  }
  for (let i = number - 1; i > 1; i--) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function getPrimes(start, finish) {
  let primes = [];
  if (finish > start) {
    for (let i = start; i <= finish; i++) {
      if (isPrime(i) === true) {
        primes.push(i);
      }
    }
  } else {
    for (let i = finish; i <= start; i++) {
      if (isPrime(i) === true) {
        primes.push(i);
      }
    }
  }
  return primes;
}
