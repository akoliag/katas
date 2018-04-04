//https://www.codewars.com/kata/can-we-divide-it/train/javascript

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0 ? true : false;
}

console.log(isDivideBy(-12, 2, 7));
