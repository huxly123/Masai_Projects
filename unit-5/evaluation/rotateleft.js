function runProgram(input) {
    input = input.trim().split("\n");
    let dim = input[0].trim().split(" ").map(Number);
    let n = +(dim[0]);
    let k = +(dim[1]);
    let arr = input[1].trim().split(" ").map(Number);
    let ans=[]
    for (let i = n; i >=0; i--){
        let index = (i - k) % n
        if (index < 0) {
            index=n+index
        }
        ans[index]=arr[i]
    }
    console.log(ans.join(" "));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`6 4
1 2 5 4 0 6`);
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
