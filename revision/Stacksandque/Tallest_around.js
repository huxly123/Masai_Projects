function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let ans=[]
        let dim = input[line++].trim().split(" ").map(Number);
        let n = +(dim[0]);
        let k = +(dim[1]);
        let arr = input[line++].trim().split(" ").map(Number);
        let left = 0;
        let right=k-1
        while (right < n) {
            let max=-1
            for (let i = left; i <= right; i++){
                if (arr[i] > max) {
                    max=arr[i]
                }
            }
            left++;
            right++;
        ans.push(max)
        }
        console.log(ans.join(" "));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
9 3
1 2 3 1 4 5 2 3 6`);
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
