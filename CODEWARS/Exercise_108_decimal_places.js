//https://www.codewars.com/kata/formatting-decimal-places-number-0

//Option 1:
function twoDecimalPlaces(n) {
  return Number(n.toFixed(2));
}

console.log(twoDecimalPlaces(3.33498));

//Option 2:
const twoDecimalPlaces = (n) => Math.round(n * 100) / 100;

//Option 3:
function twoDecimalPlaces(n) {
  return parseFloat(n.toFixed(2));
}
