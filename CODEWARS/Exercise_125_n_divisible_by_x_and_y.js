//https://www.codewars.com/kata/is-n-divisible-by-x-and-y/train/javascript

//Option 1:
function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

console.log(isDivisible(4, 2, 4));
