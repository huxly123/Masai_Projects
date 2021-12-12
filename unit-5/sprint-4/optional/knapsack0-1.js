function max(capacity, wt, val, n) {
let dp=Array(n+1).fill(0).map((el)=>Array(capacity+1).fill(0))

  for (i = 0; i <= n; i++) {
    for (j = 0; j <= capacity; j++) {
    
      if (i == 0 || j == 0) dp[i][j] = 0;
      else if (wt[i - 1] <= j) {
       
        dp[i][j] = Math.max(val[i - 1] + dp[i - 1][j - wt[i - 1]], dp[i - 1][j]);
      } else dp[i][j] = dp[i - 1][j];
    }
  }
  
  return dp[dp.length - 1][dp[0].length - 1];
}

function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var [max_weight, N] = input[line++].split(" ").map(Number);
    var valueArr = [];
    var weightArr = [];
    for (let j = 0; j < N; j++) {
      var [weight, value] = input[line++].split(" ").map(Number);
      valueArr.push(value);
      weightArr.push(weight);
    }
    var n = valueArr.length;
    console.log(max(max_weight, weightArr, valueArr, n));
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
4 5
1 8
2 4
3 0
2 5
2 3`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}