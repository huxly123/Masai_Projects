function runProgram(input) {
    input = input.trim().split("\n");
    let dim = input[0].trim().split(" ").map(Number);
    let size = +(dim[0]);
    let amount = +(dim[1]);
    let arr=input[1].trim().split(" ").map(Number)
    arr = arr.sort((a, b) => a - b);
    let sum = 0;
    let count=0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
        if (sum <= amount) {
            count++
        }
        if (sum > amount) {
            break;
   }
   
    }
    console.log(count);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4 10
5 4 2 4`);
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
