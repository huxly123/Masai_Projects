function runProgram(input) {
  input = input.trim().split("\n");
  let dim = input[0].trim().split(" ").map(Number)
  let n = dim[0];
  let cap = dim[1]
  let arr = input[1].trim().split(" ").map(Number);
  arr = arr.sort((a, b) => a - b);
  let bal = cap;
  let ans = 0
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] <= bal) {
      bal = bal - arr[i];
      ans += arr[i]
      count++;
    } else {
      ans += bal
      bal=0
      break
    }
  }
  if (bal !== 0) {
    console.log(cap);
  } else {
    console.log(count);
  }
}
if (process.env.USERNAME === "huxly") {
  //1 1000000
  //1
  
  runProgram(`1 1000000
  1`);
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
