//https://www.codewars.com/kata/count-by-x/train/javascript

function countBy(x, n) {
  var z = []
  for (var i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z
}

console.log(countBy(3, 4));
