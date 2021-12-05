function fib(num,memo) {
   

    if (num < 2) {
        return num
    }
    if (memo[num] !== -1) {
        return memo[num]
    }
    memo[num] = fib(num - 1,memo) + fib(num - 2,memo);
    return memo[num]
}

function runProgram(input) {
    let num = +(input.trim())
     let memo = Array(num+1).fill(-1);
    console.log(fib(num,memo));

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
