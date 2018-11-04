//https://www.codewars.com/kata/mispelled-word/train/javascript

var mispelled = function(word1, word2)
{
  var w = word1.length - word2.length > 0 ? word1.length : word2.length;
  var num = 0;

  for(var i = 0; i < w; i++) {
    if(word1[i] !== word2[i]) {
      num++;
    }
  }

  return num === 1;
}

console.log(mispelled('versed', 'versed1'));
