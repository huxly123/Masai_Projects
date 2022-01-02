let val = [8, 4, 0, 5, 3];
let wt = [1, 2, 3, 2, 2];
let n = wt.length - 1;
let capacity = 4;
let dp = new Array(n + 1).fill(0).map((e) => new Array(capacity + 1).fill(0));

console.log(knap(wt, val, n, capacity));

function knap(wtArr, valArr, n, capacity) {
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= capacity; j++){
            if (wtArr[i - 1] >j-1) {
                dp[i][j]=dp[i-1][j]
            }
            else {
                dp[i][j]=Math.max(valArr[i-1]+dp[i-1][capacity-wtArr[i-1]],dp[i-1][j])
            }
        }
    }
    return dp[n][capacity]
}