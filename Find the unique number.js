//DESCRIPTION:
//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//It’s guaranteed that array contains at least 3 numbers.
//The tests contain some very huge arrays, so think about performance.

//SOLUTION:

function findUniq(arr) {
  let set = new Set(arr);
  let arr2 = [...set];
  let count = 0;
  for (let i = 0; i < 4; i++) {
    if (arr[i] == arr2[0]) {
      count++
    }
  }
  return (count == 1) ? arr2[0] : arr2[1];
}