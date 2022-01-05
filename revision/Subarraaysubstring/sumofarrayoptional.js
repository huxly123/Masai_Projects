function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let numm = +(input[2]);
    for (let z = 3; z <= numm + 2; z++){
        let dim = input[z].trim().split(" ").map(Number);
        let l = dim[0]-1;
        let r = dim[1] - 1;
      
        let sum = arr.slice(l, r + 1).reduce((a, b) => a + b, 0);
        console.log(sum);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
3 2 1 5
4
1 3
2 4
1 4
3 3`);
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
