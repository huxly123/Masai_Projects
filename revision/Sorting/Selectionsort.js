//  Time comlexity --> Worst case => O(n^2)

//  Space Complexity ---> O(1)

function Sortt(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let pointer = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[pointer]) {
        pointer = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[pointer];
    arr[pointer] = temp;
  }
  console.log(arr.join(" "));
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  Sortt(arr, n);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
-4 -3 -5 -19`);
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
