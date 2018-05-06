//Write a function that returns a number of vowels used in the string.

//option 1:
function vowelsCount(str) {
  let count = 0;
  const vowels = 'aeiou';
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(vowelsCount('Monika'));

//option 2:
function vowelsCount1(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(vowelsCount1('Agnieszka'));


//option 3:
function vowelsCount2(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
//if match does not find the value returns null
//i in regex means case insensitive
console.log(vowelsCount2('Ewa'));
