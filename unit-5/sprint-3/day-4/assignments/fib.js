function fib(num) {
    let memo = new Array(num + 1).fill(-1);
    if (num < 2) {
        return num
    }
  
    return fib(num-1)+fib(num-2)
}

function runProgram(input) {
    let num = +(input.trim());

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
