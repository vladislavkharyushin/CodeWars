//DESCRIPTION:
//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//SOLUTION:

function countSheeps(sheep) {
  let result = 0;
  for (let i = 0; i < sheep.length; i++) {
    if(sheep[i]) {
      result ++
    }
  }
  return result;
}