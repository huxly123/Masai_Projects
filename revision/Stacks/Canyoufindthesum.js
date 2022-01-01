function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let x = []
    let y = []
    for (let i = 0; i < n; i++) {
        let xele = 0
        let yele = 0
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) {
                xele = -1
                x.push(j + 1)
                break
            }
        }
        if (xele == 0) {
            x.push(-1)
        }
        for (let j = i + 1; j < n; j++) {
            if (arr[j] > arr[i]) {
                yele = -1
                y.push(j + 1)
                break
            }
        }
        if (yele == 0) {
            y.push(-1)
        }
    }
let summArr=[]
    for (let i = 0; i < n; i++){
        summArr.push(x[i]+y[i])
    }
    console.log(summArr.join(" "));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
5 4 1 3 2`);
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
