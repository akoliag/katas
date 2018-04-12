//Given a string, return a new string with the reversed order of characters

//Option 1:
function reverse1(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}

console.log(reverse1('Greeting!'));

//Option 2:

function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

console.log(reverse2('coding questions'));

//Option 3:

function reverse3(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

console.log(reverse3('another coding questions'));

//Option 4:

function reverse4(str) {
 return str.split('').reduce((reversed, char) => {
   return char + reversed;
 }, '');
}

console.log(reverse4('a little bit more complicated'));
