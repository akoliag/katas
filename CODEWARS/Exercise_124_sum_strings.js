//https://www.codewars.com/kata/sum-the-strings

//Option 1:
function sumStr(a,b) {
  a = Number(a);
  b = Number(b);
  let sum = a + b;
  return sum.toString();
}

//Option 2:
function sumStr(a,b) {
  return String(Number(a)+Number(b));
}

console.log(sumStr('132', '67'));
