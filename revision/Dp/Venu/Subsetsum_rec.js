

//Sum exist in subset or not

function ss(arr, n, sum) {
    if (sum == 0) {
        return true
    }
    if (n == 0) {
        return false
    }
    if (arr[n - 1] > sum) {
        return ss(arr,n-1,sum)
    }
    else return ss(arr,n-1,sum-arr[n-1])||ss(arr,n-1,sum)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let n = 9;
let sum = 77

console.log(ss(arr,n,sum));