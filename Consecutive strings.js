//DESCRIPTION:
//You are given an array(list) strarr of strings and an integer k. Your task is 
//to return the first longest string consisting of k consecutive strings taken in the array.
//n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
//Note
//consecutive strings : follow one after another without an interruption

//SOLUTION:

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length || strarr.length === 0){
    return "";
  }
  let biggest = "";
  for (let i = 0; i < strarr.length; i++) {
    let temp = "";
    for (let j = 0; j < k; j++) {
      if (i + j > strarr.length - 1) {
        return biggest;
      } else {
        temp += strarr[i + j];
      }
    }
    if (biggest.length < temp.length) {
      biggest = temp;
    }
  }
  return biggest;
}