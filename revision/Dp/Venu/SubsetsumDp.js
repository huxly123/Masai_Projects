
//   sub set sum dp methos!!!


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 9;
let sum = 77;

let dp = new Array(n+1).fill().map(e=>Array(sum+1))
// console.log(dp);
console.log(ss(arr, n, sum));
function ss(arr, n, sum) {
  if (n == 0) {
    return false;
  }
  if (sum == 0) {
    return true;
  }
  if (typeof(dp[n][sum]) !== "undefined") {
    return dp[n][sum];
  }

  if (arr[n - 1] > sum) {
    return (dp[n][sum] = ss(arr, n - 1, sum));
  } else {
   return dp[n][sum] = ss(arr, n - 1, sum - arr[n - 1]) || ss(arr, n - 1, sum);
  }
  
}
