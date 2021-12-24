function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++) {
        let obj = {}
        let n = +(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number)
        for (let i = 0; i < n; i++) {
            if (obj[arr[i]] === undefined) {
                obj[arr[i]] = 1
            } else {
                obj[arr[i]] += 1
            }
        }
    
        let occ = false
  console.log(obj);
        for (key in obj) {
            if (obj[key] > 1) {
                occ = true;
                console.log("YES");
                break
            }
        }
        if (!occ) {
            console.log("NO");
        }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
1
1
2
1 1
3
1 2 3`);
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
