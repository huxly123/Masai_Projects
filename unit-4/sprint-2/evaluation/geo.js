function power(a,b){
    let ans=a**b;
    return ans
}

function rec(x,r){
    if(r==0) return 1
    let val=power(x,r);
    let ans=(1/val)+rec(x,r-1);
    return ans
}

function runProgram(input) {
input=input.trim().split(" ").map(Number);
let n=input[0];
let r=input[1]
console.log(rec(n,r).toFixed(4));

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`1 1`);
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
