//https://www.codewars.com/kata/array-plus-array/train/javascript
function arrayPlusArray(arr1, arr2) {
  let arraySum = arr1.concat(arr2);
  var sum = 0;
  for (var i = 0; i < arraySum.length; i++) {
    sum += arraySum[i];
  }
  return sum;
}

console.log(arrayPlusArray([34, 78, 90], [120, 87, 43]));
