//https://www.codewars.com/kata/fake-binary/train/javascript

//Option 1:
function fakeBin(x){
return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
}

console.log(fakeBin('11110787711'));

//Option 2:
function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
