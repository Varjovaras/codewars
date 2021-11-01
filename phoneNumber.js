function createPhoneNumber(numbers) {
  let stringNumbers = numbers.toString();
  let firstThree = '';
  let nextThree = '';
  let lastFour = '';
  stringNumbers = stringNumbers.split(',').join('');

  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      firstThree = firstThree + stringNumbers[i];
    }
    if (i >= 3 && i < 6) {
      nextThree = nextThree + stringNumbers[i];
    }
    if (i >= 6 && i < 10) {
      lastFour = lastFour + stringNumbers[i];
    }
  }
  const answer = `(${firstThree}) ${nextThree}-${lastFour}`;
  return answer;
}

//  (123) 456-7890
createPhoneNumber(numbers);
