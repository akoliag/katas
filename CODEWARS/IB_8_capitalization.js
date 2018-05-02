//Write a function that accepts a string. The function should capitalize
//the first letter of each word in the string then return the capitalized string.

//option 1:
function capitalize(str) {

  const words = [];
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}
//providing only the first arg with slice() we take eth from that elem to the
//very end
console.log(capitalize('a short sentence'));

//option 2:
function capitalize1(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
//we look to the left of the current character and chaeck if this is a space
console.log(capitalize1('you are a big boy'));
