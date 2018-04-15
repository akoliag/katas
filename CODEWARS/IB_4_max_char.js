//Given a string return the character that is most commonly used in the toString

//Option 1:
function maxChar(str) {
  const chars = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (chars[char]) {
      chars[char] ++;
    } else {
      chars[char] = 1;
    }
  }
  for (let char in chars) { //to iterate over an object we use for...in...
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}

console.log(maxChar('abracadabra'));
