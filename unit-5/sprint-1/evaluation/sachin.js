function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    
    let q = +(input[2]);
    let line=3
    for (let i = 0; i < q; i++){
        let count=0
        let dim = input[line++].trim().split(" ").map(Number);
        let condition = +(dim[0]);
        let number = +(dim[1]);
        if (condition == 0) {
            for (let i = 0; i < arr.length; i++){
                if (arr[i] >= number) {
                    count++
                }
            }
        }
        if (condition == 1) {
             for (let i = 0; i < arr.length; i++) {
               if (arr[i] > number) {
                 count++;
               }
             }
        }
        console.log(count);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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
