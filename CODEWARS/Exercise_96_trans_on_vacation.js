//https://www.codewars.com/kata/transportation-on-vacation/train/javascript

//Option 1:
function rentalCarCost(d) {
  let pricePerDay = 40;
  let totalPrice = 0;
  if (d >= 7) {
    totalPrice = d * pricePerDay -  50;
  } else if (d >= 3) {
    totalPrice = d * pricePerDay -  20;
  } else {
    totalPrice = d * pricePerDay;
 }
 return totalPrice;
};
console.log(rentalCarCost(7));

//Option 2:
function rentalCarCost1(d) {
  var amount,
      dayRent = 40;
  return d >= 7 ?  d * dayRent - 50 : d >= 3 ? d * dayRent - 20 : d * dayRent;
}

console.log(rentalCarCost1(5));
