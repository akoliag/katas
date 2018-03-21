//https://www.codewars.com/kata/reversing-words-in-a-string

function reverse(string){
  let reversed = string.split(' ').reverse().join(' ');
  return reversed;
}

console.log(reverse("Hi there Aga!"));
