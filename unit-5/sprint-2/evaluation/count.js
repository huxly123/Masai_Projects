function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let zero = 0;
    let one = 0;
    let two = 0
    let ans=[]
    for (let i = 0; i < n; i++){
        if (arr[i] == 0) {
        zero++
        }
        if (arr[i] == 1) {
            one++
        }
        if (arr[i] == 2) {
            two++
        }
    }
    ans.push(zero, one, two);
    console.log(ans.join(" "));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`10
0 1 0 1 1 1 0 2 2 0 `);
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
