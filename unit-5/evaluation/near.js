function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number);
        let stack = [];
      for (let i = 0; i < arr.length; i++) {
        let leftindex = -1;
        let rightindex = -1
        for (let j = i - 1; j >= 0; j--) {
          if (arr[j] < arr[i]) {
            leftindex = j
            break
          }
        }
        for (let k = i + 1; k < arr.length; k++) {
          if (arr[k] < arr[i]) {
            rightindex = k
            break
          }
        }
        if (leftindex == -1 && rightindex == -1) {
          stack.push(-1)
        } else {
          if (leftindex !== -1 && rightindex !== -1) {
            let left = i - leftindex;
            let right = rightindex - i;
            if (left == right) {
              stack.push(arr[leftindex])
            }
          else  if (left < right) {
              stack.push(arr[leftindex])
            } else {
              stack.push(arr[rightindex])
            }
          }
          else if (leftindex == -1) {
                stack.push(arr[rightindex]);
          }
          else if (rightindex == -1) {
             stack.push(arr[leftindex]);
          }
        }
      }
      console.log(stack.join(" "));
  }
  
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
8
39 27 11 4 24 32 32 1
7
1 4 6 8 4 7 5`); //-1 1 4 6 1 4 4
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
