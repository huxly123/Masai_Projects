
function runProgram(input) {
    var aa=[]
input=input.trim().split("\n");
var cases=+(input[0]);
for(i=1;i<=cases;i++){
var dim=input[i].trim().split(" ").map(Number);
var arr=dim[0]
if(dim[0]==1){
    var pushh=dim[1]
}
//push


if(arr==1){
    aa.push(pushh)
}
else if(arr==2){
    aa.pop()
}
else if(arr==3){
    if(aa[0]!=null){
console.log(aa[aa.length-1]);
    }else{
        console.log("Empty!");
    }
}
}
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`6
  1 15
  1 20
  2
  3
  2
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
