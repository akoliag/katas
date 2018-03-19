//https://www.codewars.com/kata/calculate-average/train/javascript

//Option 1:
function find_average(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    sum += array[i];

  }
  return sum/array.length;
}

console.log(find_average([45, 78, 32, 11, 7]));

//Option 2:
function find_average(array) {
  var sum = array.reduce((a, b) => a + b, 0);
  return sum/array.length;
}
