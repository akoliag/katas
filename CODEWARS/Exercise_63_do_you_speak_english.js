//https://www.codewars.com/kata/do-you-speak-english/train/javascript
function spEng(sentence){
   let check = sentence.search(/English/i);
    return (check === -1) ? false : true;
}

console.log(spEng("mama"));
