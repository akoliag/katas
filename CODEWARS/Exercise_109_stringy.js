//https://www.codewars.com/kata/stringy-strings

//Option 1:
function stringy(size) {
    const result = [];

    for (let i = 0; i < size; i++) {
        result.push(i % 2 == 0 ? 1 : 0);
    }

    return result.join('');
}

console.log(stringy(14));

//Option 2:

function stringy1(size) {
  var i, str = "";
  for( i = 1; i<=size; i++ ){
      str+=i%2;
    }
  return str;
}

console.log(stringy1(10));
