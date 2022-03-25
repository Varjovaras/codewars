function firstNonRepeatingLetter(s) {
  if (s.length === 1) {
    return s;
  }
  if (s.length === 0) {
    return '';
  }

  let bool = true;

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    bool = true;
    for (let j = 0; j < s.length; j++) {
      if (
        letter === s[j] ||
        letter === s[j].toLowerCase() ||
        letter === s[j].toUpperCase()
      ) {
        if (i != j) {
          bool = false;
          break;
        }
      }
    }
    if (bool) {
      return letter;
    }
  }
  if (bool === false) {
    return '';
  }
}

console.log(firstNonRepeatingLetter('aaaaaa'));
