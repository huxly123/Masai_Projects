function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let i = 0; i < cases; i++){
        let size = input[line++].trim().split(" ").map(Number);
        let boy = input[line++].trim().split(" ").map(Number);
        let girl = input[line++].trim().split(" ").map(Number);
        boy = boy.sort((a, b) => a - b);
        girl = girl.sort((a, b) => a - b);
        let flag = false
        let left=0
        while (left<boy.length) {
            if (boy[left] > girl[left]) {
              left++;
            }
            if (boy[left] < girl[left]) {
                flag = true;
                break
            }
        }
        if (flag == true) {
            console.log("NO");
        } else {
            console.log("YES");
        }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
4 5
2 5 6 8
3 8 5 9 7`);
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
