function neelam(arr) {
    let min = arr[0]
    let sum=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i]
            sum+=min
        } else {
            sum+=min
        }
    }
    return sum
}


function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0])
    let arr = input[1].trim().split(" ").map(Number);
console.log(neelam(arr));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
4 7 8 3 4`);
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
