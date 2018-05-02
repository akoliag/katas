//check to see if two provided strings are anagrams of each other.
//One string is an anagram of another if it uses tha same characters in the same
//quantity. Only consider characters, not spaces or punctuaction. Consider
//capital letters to be the same as lower case.


function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

console.log(anagrams("aga", "AGA"));
//str.replace(/[^\w]/g, ""/)) - removes all special characters and spaces
//from the string

console.log(buildCharMap('anagram'));
