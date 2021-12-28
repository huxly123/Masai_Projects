function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let n = +(input[line++]);
        let str = input[line++].trim().split("");
        let count = 0;
        for (let i = 0; i < str.length; i++){
            let occ = false;
            for (let j = 0; j < str.length; j++){
                if (str[i] == str[j]) {
                    occ=true
                }
            }
            if (!occ) {
                count++
            } 
        }
        console.log(count);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
6
aabbcc
5
aabcd`);
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
