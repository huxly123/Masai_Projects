
var count=0

function perm(arr, temp,l,r) {
    if (temp.length === arr.length) {
        let oddoev = 0
        for (let j = l; j <= r; j++){
            oddoev+=temp[j]
        }
        if (oddoev % 2 == 1) {
            count++
        }
  }
  for (let i = 0; i < arr.length; i++) {
    if (temp.includes(arr[i])) continue;
    temp.push(arr[i]);
    perm(arr, temp,l,r);
    temp.pop();
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
  let dim = input[1].trim().split(" ").map(Number);
  let l = dim[0];
  let r = dim[1];
 
    let arr=[]
    for (let i = 1; i <= n; i++){
        arr.push(i)
    }
    perm(arr, [], l, r)
    console.log(count);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
0 1`);
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
