function runProgram(input) {
    input = input.trim().split("\n");
    let dim = input[0].trim().split(" ").map(Number);
    let n = +(dim[0]);
    let target = +(dim[1]);
    let arr = input[1].trim().split(" ").map(Number);
    
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 1
3 4 5 1 2`);
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
