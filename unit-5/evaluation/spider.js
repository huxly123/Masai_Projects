function minJumps(arr, n) {
  let dp = Array(n).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0;

    for (let i = 0; i < n; i++){
        for (let j = 0; j < n-i; j++) {
            if (j < n) {
                dp[j] = Math.min(dp[j], dp[i] + Math.abs(arr[i] - arr[j]))
            }
        }
    }
  return dp[n-1];
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
   
   console.log(minJumps(arr,n));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
10 30 40 20`);
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
