function generateHashtag(str) {
  var regExp = /[a-zA-Z]/g;
  if (str === '' || str.length === 0 || !regExp.test(str)) {
    return false;
  }
  let newString = str.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });

  newString = '#' + newString.replace(/\s/g, '');
  if (newString.length > 140) {
    return false;
  }
  return newString;
}
console.log(generateHashtag('code' + ''.repeat(140) + 'wars'));
