//https://www.codewars.com/kata/sleigh-authentication/train/javascript

function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === "Santa Claus" && password === "Ho Ho Ho!" ? true : false;
};
