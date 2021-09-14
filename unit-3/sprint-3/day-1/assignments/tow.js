
function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
var line=1;
for(var i=0;i<cases;i++){
    var size=+(input[line++])
    var arr=input[line++].trim().split(" ").map(Number);
var stack=[];
var ans=[]
for(var j=0;j<size;j++){
    var count=0
    if(j==0){
stack.push(arr[j]);
ans.push(1)
    }
    else{
        for(var k=stack.length-1;k>=0;k--){
            if(arr[j]>stack[k]){
             count++
            }
           else if(arr[j]<stack[k]){
stack.push(arr[j])
ans.push(count+1)
count=0
           }
        }
    }
}
console.log(ans.join(" "));
}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  7
  100 80 60 70 60 75 85
  5
  3 5 0 9 8`);
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