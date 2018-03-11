//https://www.codewars.com/kata/capitalization-and-mutability/train/javascript
function capitalizeWord(word) {
  let capitalized = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalized;
}

console.log(capitalizeWord("evergreen"));
