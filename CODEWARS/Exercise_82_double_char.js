//https://www.codewars.com/kata/double-char

//Option 1:
function doubleChar(str) {
  var s1 = "";
  for(var i = 0; i < str.length; i++){
    s1 += str[i] + str[i];
  }
  return s1;
}

console.log(doubleChar("Mountains"));

//Option 2:
const doubleChar = (str) => str.split("").map(c => c + c).join("");
