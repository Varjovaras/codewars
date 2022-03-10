const ay = (word) => {
    return word
        .split(' ')
        .map((word) => word.slice(1) + word[0] + 'ay')
        .join(' ');
};
