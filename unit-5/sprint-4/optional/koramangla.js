
function minJumps(arr, n) {
    let jumps = Array(n).fill(0);

    if (n === 0 || arr[0] == 0) return -1
    
    for (let i = 1; i < n; i++){
        for (j = 0; j < i; j++){
            if (i <= j + arr[j]) {
                jumps[i] = jumps[j] + 1;
                break;
            }
        }
    }
    return jumps[n-1]
}


function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(minJumps(arr,n));

}
if (process.env.USERNAME === "huxly") {
  runProgram(`11
1 3 5 8 9 2 6 7 6 8 9`);
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
