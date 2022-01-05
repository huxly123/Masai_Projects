function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +(input[0]);
  let line=1
  for (let z = 0; z <cases; z++){
    let n = +(input[line++]);
    let arr = input[line++].trim().split(" ").map(Number);
    let left = 0;
    let right = 1;
    let max = 1
    let count = 0
   
    while (left < n - 1) {
      // console.log("left", left);
      // console.log("right", right);
      // console.log("count",count);
      if (arr[left] === arr[right]) {
        
        if (max < count) {
          max=count
        }
        count = 1
          left++;
          right = left + 1;
       continue
      }
       if (arr[left] !== arr[right]) {
        count++
      }

      if (right == n - 1) {
        left++;
        right = left + 1;
        continue
      }
     right++;
    }
    console.log(max);
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
  4
1 2 2 1
8
1 2 1 3 2 7 4 2
5
1 2 1 3 4
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
