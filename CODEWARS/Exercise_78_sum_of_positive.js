//https://www.codewars.com/kata/sum-of-positive/train/javascript
function positiveSum(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++){
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
 return sum;
}

console.log(positiveSum([3, -11, 9, 0, -1, -13]));
