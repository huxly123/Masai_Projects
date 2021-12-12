function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let size = +(input[line++]);
        let str = input[line++]
        for (let i = 0; i < size; i++){
            let stt=""
            for (let j = i; j < size; j++){
                stt += str[j]
                  console.log(stt);
            }
          
        }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
4 
aman
`);
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
