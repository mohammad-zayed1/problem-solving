// Q-1 Fibonacci Series:

// function fib(num){
//     if (num <= 1){
//         return num;
//     }
//     return fib(num - 1) + fib(num - 2);
// }

// print numbers

// function fibArr(num){
//     let arr =[];

//     for (let i = 0; i < num; i++) {
//         arr.push(fib(i));

//     }
//     return arr;
// }
// console.log(fibArr(10));

// Q-2  The sum of Array Elements:

// let arr = [1 , 2, 3 , 4] ;
// function sumElementsOfArray(arr , length){
//   if( length <= 0){
//   return 0;
//   }
//   return sumElementsOfArray(arr , length - 1) + arr[length - 1];
// }
// console.log(sumElementsOfArray(arr , arr.length));

// Q-3 Reverse a String:

// let str = "mohammad";
// function reverseString(str, length) {
//   if (length <= 0) {
//     return "";
//   }
//   return str[length - 1] + reverseString(str, length - 1);
// }
// console.log(reverseString(str, str.length));
