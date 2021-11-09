const ay = (word: string) => {
  //Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
  return word
    .split(' ')
    .map((word) => word.slice(1) + word[0] + 'ay')
    .join(' ');
};
