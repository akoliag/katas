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
