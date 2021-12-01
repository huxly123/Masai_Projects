function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0].trim());
    let arr1 = input[1].trim().split(" ").map(Number);
    arr1=arr1.sort((a,b)=>a-b)
    let arr2 = input[2].trim().split(" ").map(Number);
    arr2 = arr2.sort((a, b) => a - b);
    let max=0
    for (let i = 0; i < n; i++){
        let diff = 0;
        if (Math.abs(arr1[i] - arr2[i]) > max) {
            max = Math.abs(arr1[i] - arr2[i]);
        }
    }
    console.log(max);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
4 -4 2
4 0 5`);
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
