
function runProgram(input) {
    input=input.trim().split("\n");
    var size=+(input[0]);
    var arr=input[1].trim().split(" ").map(Number);
    var obj={}
    var sum=0;
    let max=0
    for(var i=0;i<size;i++){
sum=sum+arr[i];
if(obj[sum]==null){
    obj[sum]=i
}
    if(obj[sum]!=null){
        for(key in obj){
            if(sum==key){
max=Math.max(max,i-obj[key])
            }
        }
    }


}


console.log(max);
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`8
  3 3 1 4 3 1 1 -5`);
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
