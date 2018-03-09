//https://www.codewars.com/kata/do-i-get-a-bonus/train/javascript

//Option 1:
function bonusTime(salary, bonus) {
 if (bonus == true) {
   var salaryBonus = salary * 10;
   return `£${salaryBonus}`;
 } else {
   return `£${salary}`;
 }
}

console.log(bonusTime(1200, true));

//Option 2:
function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}
