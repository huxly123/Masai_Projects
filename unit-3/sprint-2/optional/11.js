function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
var line=1
for(var i=0;i<cases;i++){
var dim1=input[line++].trim().split(" ").map(Number);
var arr=input[line++].trim().split(" ").map(Number);
var size=+(dim1[0])
var q=+(dim1[1]);
var diff=0;
//console.log(size,q);
for(var j=0;j<size-1;j++){
diff=diff+(Math.abs(arr[j]-arr[j+1]))
}
var ans=q*diff;
console.log(ans);
}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  2 4
  2 1
  1 5
  3`);
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