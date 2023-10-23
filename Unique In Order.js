//DESCRIPTION:
//Implement the function unique_in_order which takes as argument a sequence and 
//returns a list of items without any elements with the same value next to each 
//other and preserving the original order of elements.

//SOLUTION:

var uniqueInOrder=function(iterable){
   if (typeof iterable === 'string') {
     return iterable.split('').filter((v, i, arr) => arr[i]!= arr[i + 1]);
     } else {
 return iterable.filter((v, i, arr) => arr[i]!= arr[i + 1]);
       }
}