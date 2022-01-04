function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let n = +input[line++];
    let arr1 = input[line++].trim().split(" ").map(Number);
    let arr2 = input[line++].trim().split(" ").map(Number);
    let i = 0;
      let j = arr2.length - 1;
      let count=0
    while (i<n-1&&j>=0) {
        if (arr1[i] == arr2[j]) {
            count++
            i++;
            j--
        } else if (arr1[i] < arr2[j]) {
            i++
        } else if (arr1[i] > arr2[j]) {
            j--
      }
      }
      console.log(count);
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
6
1 2 2 3 4 5
4 4 3 2 1 1`);
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
