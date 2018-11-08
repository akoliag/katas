//https://www.codewars.com/kata/polish-alphabet

//option 1:
function correctPolishLetters (string) {
  return string.replace(new RegExp('ł', 'g'), 'l').normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

//option 2:
function correctPolishLetters (string) {
  var dict = {'ą':'a','ć':'c','ę':'e','ł':'l','ń':'n','ó':'o','ś':'s','ź':'z','ż':'z'};
  return string.replace(/[ąćęłńóśźż]/g, match => dict[match]);
}

//option 3:
function correctPolishLetters (string) {  
  var map = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z'
  }
  return string.replace(/[ąćęłńóśźż]/gi, function(s){
    return map[s];
  });
}
