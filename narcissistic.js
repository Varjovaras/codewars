function narcissistic(value) {
  let baseLength = value.toString().length;
  let digits = splitToDigit(value.toString());
  let narcissistic = 0;
  for (i = 0; i < digits.length; i++) {
    narcissistic += Math.pow(digits[i], baseLength);
  }
  return narcissistic === value;
}

function splitToDigit(n) {
  return [...(n + '')].map(Number);
}
