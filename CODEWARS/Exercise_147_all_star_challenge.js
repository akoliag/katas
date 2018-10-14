//https://www.codewars.com/kata/all-star-code-challenge-number-18/train/javascript

//option 1:
function strCount(str, letter){
 let result = 0;
 for(i = 0; i < str.length; i++) if(str[i] === letter){result++}
 return result;
}

//option 2:
function strCount1(str, letter){
  return str.split('').filter(char => char == letter).length;
}
