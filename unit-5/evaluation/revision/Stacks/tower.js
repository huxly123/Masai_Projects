function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let n = +(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number);
        let stack = []
        let res=[]
        for (let i = 0; i < n; i++){
            let k = 1
            // console.log(stack);
            while (stack.length && arr[i] >= stack[stack.length - 1][0]) {
                k += stack[stack.length - 1][1];
                stack.pop()
            }
            if (stack.length) {
              res.push(k);
            } else {
              res.push(k)
            }
            // res.push(k)
            stack.push([arr[i],k])
        }
        console.log(res);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);
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
