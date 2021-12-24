function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let m = +(input[2]);
    let arr1 = input[3].trim().split(" ").map(Number);
  let obj = {}
  for (let i = 0; i < n; i++){
    if (obj[arr[i]] === undefined) {
      obj[arr[i]]=1
    } else {
      obj[arr[i]] = obj[arr[i]]+1
    }
  }
 
  for (i = 0; i < m; i++){
    if (obj[arr1[i]] === undefined) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
1 2 3 4 5
3
3 5 7`);
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
