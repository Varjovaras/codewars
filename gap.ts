export class G964 {
  public static isPrime = (num: number): boolean => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  public static gap = (g: number, m: number, n: number) => {
    let prime1: number = 0;
    let prime2: number = 0;

    for (let i = m; i < n; i++) {
      if (G964.isPrime(i) === true) {
        if (prime1 === 0) {
          prime1 = i;
          continue;
        }
        prime2 = prime1;
        prime1 = i;

        if (prime1 - prime2 === g) {
          const primePair = [prime2, prime1];
          console.log(primePair);
          return primePair;
        }
      }
    }
    return false;
  };
}

G964.gap(2, 100, 110);
