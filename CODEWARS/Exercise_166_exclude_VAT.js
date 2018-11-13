//https://www.codewars.com/kata/calculate-price-excluding-vat/train/javascript

function excludingVatPrice(price) {
  return (price == null) ? -1 : ((price / 115) * 100).toFixed(2) * 1;
}

console.log(excludingVatPrice(230));
