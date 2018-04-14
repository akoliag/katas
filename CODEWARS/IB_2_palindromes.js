//Given a string return true if a string is a palindorme and false if it's not

//Option 1:
function palindrome(str) {
  return str === str
  .split('')
  .reverse()
  .join('');
}

console.log(palindrome('aga'));

//Option 2:
function palindrome1(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(palindrome1('abba'));
