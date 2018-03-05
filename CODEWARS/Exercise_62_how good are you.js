function betterThanAverage(classPoints, yourPoints) {

  var sum = 0;
  for (var i = 0; i < classPoints.length; i++) {
    if (isNaN(classPoints[i])) {
      continue;
    }
    sum += Number(classPoints[i]);
    var average = sum/classPoints.length;
    var check = yourPoints > average ? true : false;
  }
  return check;
}
console.log(betterThanAverage([99, 87, 65, 99, 43, 65], 45));

function betterThanAverage1(classPoints, yourPoints) {
  return classPoints.reduce((prev,curr) => prev+curr)/classPoints.length < yourPoints
}

console.log(betterThanAverage1([99, 87, 65, 99, 43, 65], 99));
