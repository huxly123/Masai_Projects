function fib(a){
    if(a==1||a==0){
        return 1
    }
    return (fib(a-1)+fib(a-2))
}
function runProgram(input) {
let a=+(input)

console.log(fib(a));
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`4`);
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
