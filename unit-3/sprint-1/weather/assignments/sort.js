function find(arr,size,target){
    var aa=[]
    var i=0;
    var exist=true
while(i<size&&exist==true){
for(var j=i+1;j<size;j++){
    if(arr[i]+arr[j]==target){
        exist=false;
    var ee=true;
        aa.push(i);
        aa.push(j);
        break;
    }
   
}
i++
}
if(!ee){
    aa.push(-1);
    aa.push(-1)
}
console.log(aa.join(" "));
}
function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
var line=1;
for(var i=0;i<cases;i++){
var dim1=input[line].trim().split(" ");
var size=+(dim1[0]);
var target=+(dim1[1]);
line++;
var arr=input[line].trim().split(" ").map(Number);
line++;
find(arr,size,target);
}
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`3
  4 9
  2 11 15 7
  5 10
  1 2 3 5 5
  2 100
  48 49`);
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
