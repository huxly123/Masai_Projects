function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
      let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let ans=[]
        for (let i = 0; i < arr.length; i++) {
            let left = 0;
            let right = 0;
            let ansl = -1;
            let ansr = -1
            for (let j = i - 1; j >= 0; j--) {
                if (arr[j] < arr[i]) {
                    ansl = j
                    left = i - j;
                    break
                }
            }
            for (let j = i + 1; j < n; j++) {      //39 27 11 4 24 32 32 1
                if (arr[j] < arr[i]) {
                    ansr = j
                    right = j -i;
                    break
                }
            } if (ansl == -1 && ansr == -1) {
                ans.push(-1)
            }
            else if (ansl == -1 && ansr !== -1) {
                ans.push(arr[ansr])
            }
            else if (ansl !== -1 && ansr == -1) {
                 ans.push(arr[ansl]);
            } else {
                if (left <= right) {
                    ans.push(arr[ansl]);
                } else {
                    ans.push(arr[ansr]);
                }
            }
        }
        console.log(ans.join(" "));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
8
39 27 11 4 24 32 32 1`);
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
