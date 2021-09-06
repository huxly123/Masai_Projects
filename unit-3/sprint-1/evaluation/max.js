
function runProgram(input) {
input=input.trim().split("\n");
var dim=input[0].trim().split(" ").map(Number);
var n=dim[0];
var k=dim[1];
var arr=input[1].trim().split(" ").map(Number);
var res=0;
for(var i=0;i<k;i++){
    res=res+arr[i]
}
sum=res;
for(i=k;i<n;i++){
    sum=sum+(arr[i]-arr[i-k]);
    res=Math.max(res,sum)
}
console.log(res);
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`10 3
  -1 -1 -2 1 -2 4 1 9 3 9`);
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
