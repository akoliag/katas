//https://www.codewars.com/kata/add-length

//Option 1:
function addLength(str) {
  let array = str.split(' ');
  let arrayLength = [];
  for (let i = 0; i < array.length; i++) {
    arrayLength.push(`${array[i]} ${array[i].length}`);
  }
  return arrayLength;
}


//Option 2:
function addLength(str){
  return str.split(" ").map(s => `${s} ${s.length}`)
}

console.log(addLength('I want it back'));
