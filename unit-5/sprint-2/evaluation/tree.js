function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0].trim());
    let arr = input[1].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b)
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
        if (i == 0) {
            arr1.push(arr[i])
             arr2.push(arr[i]);
        }
        if (i == arr.length - 1) {
            arr1.push(arr[i])
             arr2.push(arr[i]);
        }
        if (i % 2 == 1 && i != 0 & i != arr.length - 1) {
            arr1.push(arr[i])
        }
         if (i % 2 == 0 && (i != 0) & (i != arr.length - 1)) {
           arr2.push(arr[i]);
         }
    }
    let max=0
    for (let i = 1; i < arr1.length; i++){
        if (arr1[i] - arr1[i - 1] > max) {
            max = arr1[i] - arr1[i - 1];
        }
    }
    for (let i = 1; i < arr2.length; i++) {
          if (arr2[i] - arr2[i - 1] > max) {
            max = arr2[i] - arr2[i - 1];
          }
    }
    console.log(max);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
5 10 6 8`);
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
