//https://www.codewars.com/kata/beginner-lost-without-a-map/train/javascript

//option 1:
function maps(x){
 const result = x.map(function(elem) {
   return elem * 2;
 })
 return result;
}

//option 2:
function maps1(x){
 let doubled = [];
 for (let i = 0; i < x.length; i++) {
   doubled.push(x[i] * 2);
 }
 return doubled;
}

console.log(maps1([3, 7, 9]));
