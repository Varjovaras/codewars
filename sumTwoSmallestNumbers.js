function sumTwoSmallestNumbers(numbers) {
  let smallestNumber;
  let secondSmallestNumber;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber || i === 0) {
      //make the previous smallest number the second smallest number
      secondSmallestNumber = smallestNumber;
      smallestNumber = numbers[i];
    } else if (
      //initialize second number if its bigger than first one
      numbers[i] < secondSmallestNumber ||
      secondSmallestNumber === undefined
    ) {
      secondSmallestNumber = numbers[i];
    }
  }
  let sum = smallestNumber + secondSmallestNumber;
  return sum;
}

sumTwoSmallestNumbers([3, 87, 45, 12, 7]);
