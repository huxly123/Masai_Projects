
function runProgram(input) {
var num=+(input);
var a1=Math.floor(num/5);
var bal1=num%5;
var a2=Math.floor(bal1/4);
var bal2=bal1%4
var a3=Math.floor(bal2/3);
var bal3=bal1%3
var a4=Math.floor(bal3/2);
var bal4=bal1%2
var a5=Math.floor(bal4/1);


var ans=a1+a2+a3+a4+a5;
console.log(ans);
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`29`);
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