
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0])
for(let i=1;i<=cases;i++){
    let arr=input[i].trim().split("");
    
}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3
  {([])}
  ()
  ([]
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
