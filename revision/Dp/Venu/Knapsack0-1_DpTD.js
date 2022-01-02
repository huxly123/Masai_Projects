let val = [8, 4, 0, 5, 3];
let wt = [1, 2, 3, 2, 2];
let n = wt.length - 1;
let capacity = 4;
let dp = new Array(n + 1).fill(-1).map(e => new Array(capacity + 1).fill(-1))

console.log(knap(wt,val,n,capacity));
function knap(wtArr, valArr, n, capacity) {
    if (n < 0 || capacity == 0) {
        return 0
    }
    if (wtArr[n] > capacity) {
    dp[n][capacity]= knap(wtArr,valArr,n-1,capacity)
    }
    if (dp[n][capacity] !== -1) {
        return dp[n][capacity]
    }
    else {
        
        dp[n][capacity] = Math.max(valArr[n] + knap(wtArr, valArr, n - 1, capacity - wtArr[n]), knap(wtArr, valArr, n - 1, capacity))
        return dp[n][capacity];
    }
    
}