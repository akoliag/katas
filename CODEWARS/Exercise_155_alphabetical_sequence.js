//https://www.codewars.com/kata/alphabetical-sequence/train/javascript

function alphaSeq (str) {
    let alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    let sortArr = str.toLowerCase().split("").sort();
    let arr = sortArr.map((letter) => {
        let lower = letter.toLowerCase().repeat(alph.indexOf(letter.toUpperCase()));
        return letter.toUpperCase() + lower;
    });
    return arr.join(",");
}
