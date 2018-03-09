//https://www.codewars.com/kata/string-cleaning/train/javascript
function stringClean(s){
  return s.replace(/[0-9]/g, '');
}
console.log(stringClean("row9e9r"));
