//DESCRIPTION:
//Some numbers have funny properties. For example:
//89 --> 8? + 9? = 89 * 1
//695 --> 6? + 9? + 5?= 1390 = 695 * 2
//46288 --> 4? + 6?+ 2? + 8? + 8? = 2360688 = 46288 * 51
//Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
//we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n
//In other words:
//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
//If it is the case we will return k, if not return -1.
//Note: n and p will always be given as strictly positive integers.

//SOLUTION:

function digPow(n, p){
  let strNum = String(n);
  let sum = 0;
  for (let i = 0; i < strNum.length; i++) {
    sum += Math.pow(strNum[i], p);
    p++
  }
  return (sum % n == 0) ? sum / n : -1;
}