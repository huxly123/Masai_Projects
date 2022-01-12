function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b);
    let left = 0;
    let right =1;
      let flag = false;
    while (left <= right && right <n) {
     if (arr[right] - arr[left] < k) {
              right++;
          }
          else if (arr[right] - arr[left] > k) {
            left++;
          }
          else if (arr[right] - arr[left] == k) {
            flag = true
            break
          }
    }
    if (flag) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
5 3
1 2 3 4 5
6 0
-8 -7 5 6 6 9`);
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
