function generateHashtag(str) {
  var regExp = /[a-zA-Z]/g;
  if (str === '' || str.length === 0 || !regExp.test(str)) {
    return false;
  }
  str.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });

  str = '#' + str1.replace(/\s/g, '');
  if (str1.length > 140) {
    return false;
  }
  return str1;
}
console.log(generateHashtag('code' + ''.repeat(140) + 'wars'));
