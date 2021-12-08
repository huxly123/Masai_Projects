function coin (num, dp) {
    if (num == 0) {
        return 0
    }
    if (dp[num] !== -1) {
        return dp[num]
    }
    dp[num] = Math.max(num,coin(Math.floor(num / 2),dp) + coin(Math.floor(num / 3),dp) + coin(Math.floor(num / 4),dp))
    return dp[num]
}

function runProgram(input) {
    input = input.trim().split("\n");
    
    for (let i = 0; i < input.length; i++){
        let num =+(input[i])
        let dp = Array(num + 1).fill(-1);
 
console.log(coin(num,dp));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`12
2`);
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
