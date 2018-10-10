//https://www.codewars.com/kata/sum-of-differences-in-array

//option 1:
const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);

//option 2:
function sumOfDifferences(arr) {
  return arr.sort((a, b) => a - b)[arr.length-1] - arr[0] || 0;
}
