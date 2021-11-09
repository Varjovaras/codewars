export const likes = (a: string[]): string => {
  let likes: string = '';
  if (a.length === 0) {
    likes = 'no one likes this';
  } else if (a.length === 1) {
    likes = `${a[0]} likes this`;
  } else if (a.length === 2) {
    likes = `${a[0]} and ${a[1]} like this`;
  } else if (a.length === 3) {
    likes = `${a[0]}, ${a[1]} and ${a[2]} like this`;
  } else if (a.length > 3) {
    likes = `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
  }
  console.log(likes);
  return likes;
};

likes(['Alex', 'Jacob', 'Mark', 'Max']);
