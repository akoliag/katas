//https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

Option 1:
function digitize(n) {
  n = n.toString();
  let numbers = n.split('').reverse();
  return numbers.map( x => x = Number(x));
}

console.log(digitize(77786753626));

Option 2:

function digitize(n){
  return (n + '').split('').map(Number).reverse();
}
console.log(digitize(77786753626));
