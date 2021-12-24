function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let dim = input[line++].trim().split(" ").map(Number);
        let k=+(dim[1])
        let arr = input[line++].trim().split(" ").map(Number);
        let left = 0;
        let right = arr.length - 1;
      let occ = false
      if (arr.length == 1) {
        console.log(-1);
      } else {
        while (!occ) {
          if (arr[left] + arr[right] == k) {
            occ = true
            break
          }
          if (right - left == 1) {
            if (right == 1) {
              break
            } else {
              left = 0;
              right--
            }
          } else {
            left++;
          }

          
        }
        if (occ) {
          console.log(1);
        } else {
          console.log(-1);
        }
      }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
5 13
3 4 0 2 7
5 2
3 4 0 2 7`);
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
