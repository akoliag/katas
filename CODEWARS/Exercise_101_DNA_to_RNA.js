//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

//Option 1:
function DNAtoRNA(dna) {
  return  dna.replace(/T/g, 'U');

}

console.log(DNAtoRNA("TAGT"));

//Option 2:

function DNAtoRNA1(dna) {
  return dna.split("T").join("U");
}

console.log(DNAtoRNA1("TATT"));
