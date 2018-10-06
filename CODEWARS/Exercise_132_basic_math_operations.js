//https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

//option 1:
function basicOp(operation, value1, value2){
  switch (operation) {
    case '+':
    return value1 + value2;
    break;
    case '-':
    return value1 - value2;
    break;
    case '*':
    return value1 * value2;
    break;
    case '/':
    return value1 / value2;
    break;
  }
}

//option 2:

function basicOp(o, v1, v2)
{
 if (o === '+') return v1 + v2;
 if (o === '-') return v1 - v2;
 if (o === '/') return v1 / v2;
 if (o === '*') return v1 * v2;
}
