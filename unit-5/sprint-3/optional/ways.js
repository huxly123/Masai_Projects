function ways(num,memo) {
    if (num == 0) {
      
        return 1
    } if (num < 0) {
        return 0
    }
    if (memo[num] !== -1) {
            return memo[num]
        }
    memo[num] = ways(num - 1,memo) + ways(num - 3,memo) + ways(num - 4,memo);
    return memo[num]
}


function runProgram(input) {
    let num = +input
    memo=Array(num+1).fill(-1)
console.log(ways(num,memo));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5`);
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
