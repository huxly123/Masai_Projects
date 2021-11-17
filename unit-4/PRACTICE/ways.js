var res=0
function findStep(n) {
  if (n<0) return 0;
  else if (n==0) res++;
 return (
   findStep( n-1) +
   findStep(n-2) +
   findStep( n-5)
 );
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +(input[0])
  let line = 1
  for (let i = 0; i < cases; i++){
    let num = +(input[line++])
   

    findStep(num,  0)
    console.log(res);
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
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
