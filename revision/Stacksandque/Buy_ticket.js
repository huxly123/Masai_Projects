function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let que=[]
    for (let z = 1; z <= cases; z++){
        let dim = input[z].trim().split(" ");
        let condition = dim[0];
        if (condition === "E") {
            let num=+(dim[1])
            que.push(num);
            console.log(que.length);
        } else {
            let ans = []
            if (que.length == 0) {
                ans.push(-1, 0)
                
            } else {
                ans.push(que.shift())
                ans.push(que.length)
            }
            console.log(ans.join(" "));
        }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
E 2
D
D
E 3
D`);
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
