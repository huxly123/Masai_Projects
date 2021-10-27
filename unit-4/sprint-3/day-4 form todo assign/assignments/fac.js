function fac(num){
    if(num<=1){
        return 1
    }
    return fac((num-1))*(num)
    
}
function runProgram(input) {
let num=+(input.trim())

console.log(Math.log(fac(num)).toFixed(4));
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3`);
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