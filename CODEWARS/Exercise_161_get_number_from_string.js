//https://www.codewars.com/kata/get-number-from-string/train/javascript


function getNumberFromString(s) {
  return Number(s.replace(/\D/g, ""));
}


console.log(getNumberFromString('that is the number: 97'));
