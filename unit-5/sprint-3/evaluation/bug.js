function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let flag = false;
    let ans=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 1) {
            flag = true
            ans = i;
            break;
        }
    }
    if (flag == true) {
        console.log(ans);
    }
    else {
        console.log(-1);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
0 0 0 1 1`);
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
