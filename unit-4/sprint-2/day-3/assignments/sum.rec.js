function sum(arr,size){
   
}
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
let line=1;
for(let i=0;i<cases;i++){
    let size=+(input[line++]);
    let arr=input[line++].trim().split(" ").map(Number);

}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  3
  1 5 2
  5
  3 5 6 1 8`);
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
