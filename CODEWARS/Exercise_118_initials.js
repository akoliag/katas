//https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

function abbrevName(name){
 let split = name.toUpperCase().split(' ');
return `${split[0][0]}.${split[1][0]}`;
}

console.log(abbrevName("Andy Crawling"));
