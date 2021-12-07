function inc(arr,dp) {
    for (let i = 1; i < arr.length; i++){
        for (let j = 0; j < i; j++){
            if (arr[j] < arr[i] && dp[i] === dp[j]) {
                dp[i]+=1
            }
        }
    }
    let max = 0;
    for (let i = 0; i < dp.length; i++){
        if (dp[i] > max) {
            max=dp[i]
        }
    }
    return max
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let dp = Array(n).fill(1)
    console.log(inc(arr,dp));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`9
10 22 9 33 21 50 41 60 80`);
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
