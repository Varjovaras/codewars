function vowelCount(str: string) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}
