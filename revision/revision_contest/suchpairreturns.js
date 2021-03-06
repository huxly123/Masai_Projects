function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b);
    let left = 0;
    let right = n - 1;
    let flag = false;
    while (left < right) {
      if (arr[left] + arr[right] < k) {
        left++;
      } else if (arr[left] + arr[right] > k) {
        right--;
      } else if (arr[left] + arr[right] == k) {
        flag = true;
        break;
      }
    }
    if (flag) {
      console.log(1);
    } else {
      console.log(-1);
    }
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
5 2
3 4 0 2 7`);
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
