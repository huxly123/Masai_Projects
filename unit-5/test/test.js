// function fib(n) {
//     let dp=new Array(n+1).fill(-1)
//     if (n == 0 || n == 1) {
        
//         return n
//     }
//    else if (dp[n] !== -1) {
//        return dp[n]
//     }
//     console.log(n);
//     dp[n] = fib(n - 1) + fib(n - 2)
//     return dp[n]
// }

// console.log(fib(4));
// let count=0
// let dp=new Array(5).fill(-1)
// function step(n) {
//     if (n < 0) {
//       return 0
//     }
//     if (n == 0) {
//         return 1
//     }
//     else if (dp[n] !== -1) {
//         return dp[n]
//     }
//     dp[n] = step(n - 1) + step(n - 2) + step(n - 3)
//     return dp[n]
// }

// console.log(step(4));

// var arr = [1, 1, 1, 1, 1, 1]
// let sum=0
// function su(arr, n) {
//     if (n < 0) {
//         return 0
//     }
//     return arr[n]+su(arr,n-1)
// }

// console.log(su(arr,5));