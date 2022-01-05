function runProgram(input) {
  input = input.trim().split("\n");
  let dim = input[0].trim().split(" ").map(Number);
  let n = +dim[0];
  let k = +dim[1];
  let str = input[1].trim().split("");
  let left = 0;
  let right = k - 1;
  let count = 0;
  while (right < n) {
    let obj = {};

    let flag = false;
    //   console.log(left,right);
    for (i = left; i < left + k; i++) {
      if (obj[str[i]] === undefined) {
        obj[str[i]] = 1;
      } else {
          flag=true
        obj[str[i]] += 1;
      }
    }
    // console.log(obj);
    if (!flag) {
      count++;
    }
    left++;
    right++;
  }
  console.log(count);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4 2
abcc`);
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
