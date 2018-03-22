//Option 1:
function squareSum(numbers) {
  let square = [];
  for (var i = 0; i < numbers.length; i++) {
    var s = numbers[i] * numbers[i];
    square.push(s);
  }
  let sum = 0;
  for (var i = 0; i < square.length; i++) {
    sum += square[i];
  }
  return sum;
}

console.log(squareSum([2, 2, 3]));


//Option 2:
function squareSum1(numbers) {
  let square = numbers
    .map(x => x * x)
    .reduce((x, y) => x + y);
  return square;
}

console.log(squareSum1([2, 3, 3]));
