let max=0

function gcd(a, b) {
    if()
}


function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let dim = input[line++].trim().split(" ").map(Number);
        let a = +(dim[0]);
        let b = +(dim[1]);

    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
6 9
2 25`);
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
