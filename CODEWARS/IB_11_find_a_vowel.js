//Write a function that returns a number of vowels used in the string.

//option 1:
function vowelsCount(str) {
  let count = 0;
  const vowels = 'aeiou';
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(vowelsCount('Monika'));
