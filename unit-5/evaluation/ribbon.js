function runProgram(input) {
    input = input.trim().split("\n");
    let dim = input[0].trim().split(" ").map(Number);
    let n = +(dim[1]);
    let weakArr = input[1].trim().split(" ").map(Number);
    let arr=[]
    for (let i = 0; i <= n; i++){
        arr.push(i)
    }
    
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4 7
1 3 4 5
`);
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
