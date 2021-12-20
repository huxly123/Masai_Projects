function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b)
    let ans=[]
    let n1 = +(input[2]);
    let line=3
    for (let i = 0; i < n1; i++){
        let dim = input[line++].trim().split(" ").map(Number);
        let l = +(dim[0]);
        let r = +(dim[1]);
        let count=0
        for (let j = 0; j < arr.length; j++){
            if (arr[j] >= l && arr[j] <= r) {
                count++
            }
        }
        ans.push(count)
    }
    console.log(ans.join(" "));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
10 1 10 3 4
4
1 10
2 9
3 4
2 2
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
