export class G964 {
  public static nbYear = (
    p0: number,
    percent: number,
    aug: number,
    p: number
  ) => {
    percent = percent / 100;

    let years: number = 0;
    for (let i = 1; p0 < p; i++) {
      p0 = p0 + p0 * percent + aug;
      years = i;
    }

    return years;
  };
}

G964.nbYear(1500000, 0, 10000, 2000000);
