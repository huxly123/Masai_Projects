function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1
    let ans = []
        let que=[]
    for (let z = 0; z < cases; z++){
        let dim = input[line++].trim().split(" ")
        let condition = dim[0];
        // console.log(condition);
        if (condition === "E") {
            let club = +(dim[1]);
            let number = +(dim[2]);
            let n = que.length - 1
            let occ=false
            while (que.length && n >= 0) {
                if (que[n][0] === club) {
                    occ = true
                    
                }
                que.splice(n+1,0,[club,number])
                n--
            }
            if (!occ) {
                que.push([club,number])
            }
        } else {
            ans.push(que.shift())
        }
    }
    for (let i = 0; i < ans.length; i++){
        console.log(ans[i].join(" "));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
E 1 1
E 2 1
E 1 2
D
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
