//https://www.codewars.com/kata/count-the-monkeys/train/javascript

function monkeyCount(n) {
  var z = []
  for (var i = 1; i <= n; i++) {
    z.push(i);
  }
  return z;
}

console.log(monkeyCount(5));
