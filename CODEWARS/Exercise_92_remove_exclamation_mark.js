//https://www.codewars.com/kata/remove-exclamation-marks/train/javascript
function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
console.log(removeExclamationMarks('!!!!Remove!!!!'));
