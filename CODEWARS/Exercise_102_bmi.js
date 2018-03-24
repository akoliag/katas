//https://www.codewars.com/kata/calculate-bmi/train/javascript

//Option 1:

function bmi(weight, height) {
  var bmi = (weight / (height * height));
  bmi = bmi.toFixed(2);
  switch (true) {
    case bmi <= 18.5:
      return 'Underweight';
      break;
    case bmi <= 25:
      return 'Normal';
      break;
    case bmi <= 30:
      return 'Overweight';
      break;
    case bmi > 30:
      return 'Obese';
      break;
  }
}

console.log(bmi(50, 1.66));


//Option 2:

function bmi1(weight, height) {
var bmi  = weight/(height*height);
 return bmi < 18.5 ? "Underweight" : bmi <=25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";
}
console.log(bmi1(60, 1.66));
