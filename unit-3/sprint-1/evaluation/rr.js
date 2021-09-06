
function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
var line=1
for(var i=0;i<cases;i++){
var n=+(input[line])

line++
var arr=input[line].trim().split(" ").map(Number);
line++;
var half=n/2
var count1=0;
var count2=0
for(var j=0;j<n;j++){
if(arr[j]==1){
    count1++
}else{
    count2++
}
}
if(count2!=0&&count1!=0){
if(half%2==0){
    if(count1%2==0&&count2%2==0){
        console.log("YES");
    }else{
        console.log("NO");
    }
}else{
    if(count1%2==0&&count2%2!=0){
        console.log("YES");
    }
   else if(count2%2==0&&count1%2!=0){
console.log("YES");
   }else{
       console.log("NO");
   }
}
}
else{
    console.log("YES");
}
}
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  4
  1 2 1 2
  6
  1 1 1 2 2 2`);
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
