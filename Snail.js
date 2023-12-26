//DESCRIPTION:
//Given an n x n array, return the array elements arranged from outermost elements to 
//the middle element, traveling clockwise.
//array = [[1,2,3],
//         [4,5,6],
//         [7,8,9]]
//snail(array) #=> [1,2,3,6,9,8,7,4,5]
//For better understanding, please follow the numbers of the next array consecutively:
//array = [[1,2,3],
//         [8,9,4],
//         [7,6,5]]
//snail(array) #=> [1,2,3,4,5,6,7,8,9]
//This image will illustrate things more clearly:
//NOTE: The idea is not sort the elements from the lowest value to the highest; the idea 
//is to traverse the 2-d array in a clockwise snailshell pattern.
//NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

//SOLUTION:

function snail(array) {
  let element = [];
  while (array.length) {
    element.push(...array.shift());
    array.map(row => element.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return element;
}