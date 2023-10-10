//DESCRIPTION:
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

//SOLUTION:

function DNAStrand(dna){
  let dnaKey = {
    "A" : "T",
    "T" : "A",
    "C" : "G",
    "G" : "C"
  }
  let compSide = "";
  for (let i = 0; i < dna.length; i++) {
    compSide += dnaKey[dna[i]];
  }
  return compSide;
}