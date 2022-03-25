function expandedForm(num) {
  let str = num.toString();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== '0') {
      result += str[i] + '0'.repeat(str.length - i - 1);
      if (i !== str.length - 1) result += ' + ';
    }
  }
  return result;
}

console.log(expandedForm(1200));
