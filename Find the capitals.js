//DESCRIPTION:
//Write a function that takes a single string (word) as argument. The function must return 
//an ordered list containing the indexes of all capital letters in the string.

//SOLUTION:

var capitals = function (word) {
  let a = word.split('');
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] == a[i].toUpperCase()) {
      b.push(i);
    }
  }
  return b;
};