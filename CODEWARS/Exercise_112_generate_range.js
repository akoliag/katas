//https://www.codewars.com/kata/55eca815d0d20962e1000106

function generateRange(min, max, step){
let generatedRange = [];
  for (var i = min; i <= max ; i+=step) {
  generatedRange.push(i);
}
return generatedRange;
}
