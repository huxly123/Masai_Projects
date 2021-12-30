function runProgram(input) {
  input = input.trim().split("\n");
  let line = 0;
  while (true) {
    let n = +input[line++];

    if (n == 0) {
      break;
    }
    let arr = input[line++].trim().split(" ").map(Number);
    let temp = [];
    let ans = [];
    while (arr.length !== 0) {
                                                                //4 1 5 3 2
      // console.log(arr,temp);

      if (arr[arr.length - 1] > arr[arr.length - 2]) {
        temp.push(arr.pop());
      } else if (arr[arr.length - 1] < arr[arr.length - 2]) {
        ans.push(arr.pop());
      } else if (temp[temp.length - 1] < arr[arr.length - 1]) {
        ans.push(temp.pop());
      } else if (arr.length == 1 && temp.length == 0) {
        ans.push(arr.pop());
      }
    }
    console.log(ans);
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 
4 1 5 3 2 
0`);
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
// 5 
// 3 1 2 5 4 
// 5 
// 5 3 2 1 4 
// 10 
// 1 2 10 5 4 3 7 6 8 9 
// 10 
// 1 2 10 5 4 3 9 8 7 6 
// 5 
// 3 5 2 4 1 
// 5 
// 1 2 4 3 5 
// 4 
// 4 2 3 1 