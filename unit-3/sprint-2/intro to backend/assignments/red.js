
function runProgram(input) {
var arr=input.trim().split("");
var aa=[]
for(var i=0;i<arr.length;i++){
    console.log(i);
    var count=0
    for(var j=i;j<arr.length;j++){
if(arr[i]==arr[j]){
count++
}
else{
if(count%2!=0||count==1){
    aa.push(arr[i]);
    
}
i=j-1
break;
}
    }
}
console.log(aa.join(""));
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`aaabccddd`);
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
