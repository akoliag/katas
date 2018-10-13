//https://www.codewars.com/kata/if-you-cant-sleep-just-count-sheep/train/javascript

var countSheep = function (num){
  let str = "";
  for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
  return str;
}
