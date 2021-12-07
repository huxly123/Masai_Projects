function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let i = 0; i < cases; i++){
        let arr = input[line++].trim().split("");
        let count=1
        for (let j = 0; j < arr.length-1; j++){
            if (arr[j] !== arr[j + 1]) {
                count++
            }
        }
        console.log(count);
    }
  
    
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
aaaaa
abbbaaz`);
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
