//https://www.codewars.com/kata/reversed-sequence
//Option 1:
const reverseSeq = n => {
let array = [];
let counter = 0;
while(counter < n ) {
  array.push( counter += 1 );
}
return array.reverse();
}

console.log(reverseSeq(5));

//Option 2:
const reverseSeq1 = n => {
let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
    } return arr;
};

console.log(reverseSeq1(6));
