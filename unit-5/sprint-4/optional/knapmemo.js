function knap(weightArr, valueArr, n, capacity, dp) {
    let result;
  if (n < 0 || capacity == 0) {
    return 0;
    }
    if (dp[capacity][n] !== -1) {
        return dp[capacity][n];
    }
  if (weightArr[n] > capacity) {
    return knap(weightArr, valueArr, n - 1, capacity, dp);
  } else {
    dp[capacity][n]= Math.max(
      knap(weightArr, valueArr, n - 1, capacity, dp),
      valueArr[n] +
        knap(weightArr, valueArr, n - 1, capacity - weightArr[n], dp)
      );
      return dp[capacity][n]
  }
}

function runProgram(input) {
  input = input.split("\n");
  var cases = +input[0];
  var line = 1;
  for (let k = 0; k < cases; k++) {
    var [capacity, N] = input[line++].split(" ").map(Number);
    var valueArr = [];
    var weightArr = [];
    for (let j = 0; j < N; j++) {
      var [weight, value] = input[line++].split(" ").map(Number);
      valueArr.push(value);
      weightArr.push(weight);
    }
      var n = valueArr.length - 1;
      let dp=Array(capacity+1).fill(-1).map((el)=>Array(n+2).fill(-1))
    console.log(knap(weightArr, valueArr, n, capacity,dp));
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
