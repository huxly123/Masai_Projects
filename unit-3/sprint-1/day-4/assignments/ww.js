function add(sub){
    var sum=0
    for(var i=0;i<sub.length;i++){
        sum=sum+sub[i]
    }
    if(sum==0){
        return true
    }else{
        return false
    }
}
function runProgram(input) {
var arr=input.trim().split(" ").map(Number);
var cc=[]
var aa=[]
for(var i=0;i<arr.length;i++){
   
    for(var j=i+1;j<=arr.length;j++){
     
        var sub=""
        for(var k=i;k<j;k++){
            sub=sub+arr[k]
        }if(add(sub)==true){
            aa.push(i)
            aa.push(j)
        }
    }
    cc.push(aa)
}
console.log(aa);
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`6 3 -1 -3 4 -2 2 4 6`);
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