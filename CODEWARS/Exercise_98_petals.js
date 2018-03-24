//https://www.codewars.com/kata/opposites-attract/train/javascript

//Option 1
function lovefunc(flower1, flower2){
return flower1 % 2 === 1 && flower2 % 2 === 0 || flower1 % 2 === 0 && flower2 % 2 === 1 ? true : false;
}
console.log(lovefunc(8, 8));


//Option 2
function lovefunc1(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}
console.log(lovefunc1(8, 5));
