//https://www.codewars.com/kata/twice-as-old

//option 1:
function twiceAsOld(a, b) {
  return a>2*b ? a-2*b : 2*b-a;
}

//option 2:
const twiceAsOld1=(d,s)=>Math.abs(d-s-s)
