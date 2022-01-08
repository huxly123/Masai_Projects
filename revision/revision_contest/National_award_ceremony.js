function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let n = +(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number);
        let zeroCount = 0;
        let oneCount = 0;
        let twoCount = 0;
        for (let i = 0; i < n; i++){
            if (i == 0) {
                zeroCount++
            }
             if (i == 1) {
               oneCount++;
            }
             if (i == 2) {
               twoCount++;
             }
        }
        let res=[]
        for (let i = 0; i < n; i++){
            if (zeroCount > 0) {
                res.push(0)
                zeroCount--
            } else {
                if (oneCount > 0) {
                    res.push(1)
                    oneCount--
                } else {
                    res.push(2)
                    twoCount--
                }
            }
        }
        console.log(res);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
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
