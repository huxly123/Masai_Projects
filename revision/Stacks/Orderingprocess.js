function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number)
    let ideal = input[2].trim().split(" ").map(Number);
let happend=0
    while (arr.length) {
        if (arr[0] == ideal[0]) {
            arr.shift();
            ideal.shift();
            happend++
        } else {
            arr.push(arr.shift())
            happend++
        }


    }
    
console.log(happend);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
3 2 1
1 3 2`);
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
