function findStep(n)
{
    if (n == 1 || n == 0)
        return 1;
    else if (n == 2)
        return 2;

    else
        return findStep(n - 3) + findStep(n - 2)  + findStep(n - 1);
}

function runProgram(input) {
let n=+(input);
console.log(findStep(n));



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

