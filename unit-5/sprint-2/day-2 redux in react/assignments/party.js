

function runProgram(input) {
    input = input.trim().split("\n");
    let dim = input[0].trim().split(" ").map(Number);
    let n = dim[0];
    let k = dim[1];
    let amount = dim[2];
  let arr = input[1].trim().split(" ").map(Number);
  arr = arr.sort((a, b) => a - b);
  let sum=0
  for (let i = 0; i < k; i++){
    sum+=arr[i]
  }
  if (sum <= amount) {
    console.log("Party");
  }
  else {
    console.log("Sad");
  }
  
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 3 24
6 4 21 20 13`);
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
