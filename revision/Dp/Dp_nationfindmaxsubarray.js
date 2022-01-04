function dp(arr, n, curr_max, max) {
  for (let i = 1; i < n; i++) {
    curr_max = Math.max(arr[i], curr_max + arr[i]);
    max = Math.max(max, curr_max);
  }
  return max;
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(dp(arr, n, arr[0], arr[0]));
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
3
1 2 3
4
-1 -1 0 1
3
2 -1 2`);
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
