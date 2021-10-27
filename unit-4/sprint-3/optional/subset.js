
function runProgram(input) {
    input=input.trim().split("\n");
    let size=+(input[0]);
    let arr=input[1].trim().split(" ").map(Number);
    let num=+(input[2]);


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`);
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

