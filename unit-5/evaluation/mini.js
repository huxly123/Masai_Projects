function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let n = +(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number);
        arr = arr.sort((a, b) => a - b);
        let zero=[]
        while (arr[0] === 0) {
            zero.push(arr[0]);
            arr.shift()
      }
        let temp = arr[0];
        arr.shift()
        for (let i = 0; i < zero.length; i++){
            arr.unshift(zero[i])
        }
        arr.unshift(temp)
        console.log(arr,zero);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
4
2 1 0 0
4
1 4 2 3
4
5 2 3 2`);
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
