//https://www.codewars.com/kata/word-count/train/javascript

//option 1:
function countWords(str) {
  return (str.match(/[^\s]+/g) || []).length;
}

//option 2:
const countWords = str => str.split(/\s+/).filter(x => x).length;
