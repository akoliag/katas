//https://www.codewars.com/kata/remove-first-and-last-character/train/javascript
//Option 1:
function removeChar(str){
  if (str.length >= 3){
    var chopped = str.slice(1, -1);
  }
  return chopped;
};
console.log(removeChar("learning"));

//Option 2:
function removeChar(str) {
  return str.slice(1, -1);
}

//Option 3:
function removeChar(str){
 return str.substring(1, str.length-1);
};
