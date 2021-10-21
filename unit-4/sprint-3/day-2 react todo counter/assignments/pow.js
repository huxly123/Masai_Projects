function pow(n,p){
    if(p==0){
        return 1
    }
    return pow(n,p-1)*n
}
function runProgram(input) {
input=input.trim().split(" ").map(Number);
let n=input[0];
let p=input[1];
console.log(pow(n,p));

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2 4`);
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