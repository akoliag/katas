//https://www.codewars.com/kata/get-the-mean-of-an-array/train/javascript

function getAverage(marks){
  let average = marks.reduce((a, b) => a + b, 0)/marks.length;
  return Math.floor(average);
}
