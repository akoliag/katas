//https://www.codewars.com/kata/remove-string-spaces/train/javascript
//Option 1:
function noSpace(x){
  return x.replace(/\s/g, "")
}

console.log(noSpace("Let's try this!"));

//Option 2:
function noSpace1(x){
  return x.split(' ').join('');
}

console.log(noSpace1("Let's try that!"));
