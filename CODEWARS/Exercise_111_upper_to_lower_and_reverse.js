// https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/train/javascript
String.prototype.toAlternatingCase = function () {
    return this.split('').map(function (char) {
        return char === char.toUpperCase()
            ? char.toLowerCase()
            : char.toUpperCase();
    }).join('');
}
