//https://www.codewars.com/kata/formatting-decimal-places-number-0

function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

console.log(twoDecimalPlaces(3.33498));
