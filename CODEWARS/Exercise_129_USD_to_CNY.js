//https://www.codewars.com/kata/usd-equals-%3E-cny

//option 1:
function usdcny (usd) {
  let cny = usd * 6.75;
  let cnyRounded = cny.toFixed(2);
  return `${cnyRounded} Chinese Yuan`
}

//option 2:
usdcny = usd => `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
