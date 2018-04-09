//https://www.codewars.com/kata/58cb43f4256836ed95000f97


//Option 1:
function find_difference(a, b) {
  return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
}

//Option 2:
function find_difference(a, b) {
  return Math.abs(a.reduce(function(x,y){return x*y;}) - b.reduce(function(x,y){return x*y;}))
}
