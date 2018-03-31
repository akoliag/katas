//https://www.codewars.com/kata/56a946cd7bd95ccab2000055

//Option 1:
function lowercaseCount(str){
var count = 0, len = str.length;
  for(var i = 0; i < len; i++) {
    if(/[a-z]/.test(str.charAt(i))) count++;
  }
  return count;
    }

//Option 2:
function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}
