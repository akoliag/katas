//https://www.codewars.com/kata/who-is-going-to-pay-for-the-wall/train/javascript

//option 1:
function whoIsPaying(name){
 return name.length <= 2 ? [name] : [name,name.substring(0,2)];
}

//option 2:
function whoIsPaying(name){
  let result = [];
  if (name.length <= 2) {
    return [name];
  } else if (name.length > 2) {
    result.push(name) && result.push(name.slice(0, 2));
  }
  return result;
}

console.log(whoIsPaying("Andrew"));
