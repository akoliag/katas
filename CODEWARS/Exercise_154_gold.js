//https://www.codewars.com/kata/man-in-the-west/train/javascript

//option 1:
function checkTheBucket(bucket){
  let filtered = bucket.filter(function(word){
    if (word === 'gold') {
      return true;
    }
  })
  return filtered.length == 0 ? false : true;
}

//option 2:
function checkTheBucket(bucket){
  return bucket.includes('gold');
}

//option 3:
function checkTheBucket(bucket){
  return bucket.some(function (item){
    return item === 'gold';
  });
}
