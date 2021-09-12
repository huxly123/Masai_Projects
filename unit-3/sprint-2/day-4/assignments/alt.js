
function runProgram(input) {
    input=input.trim().split("\n");
    var size=input[0];
    var arr=input[1].trim().split(" ").map(Number);
    var aa=[]
    
    for(var i=0;i<size;i++){
        var exist=false
        var r=i-1
        while(arr[i]<=arr[r]&&r>=0){
r--
        }
        if(arr[i]>arr[r]){
            aa.push(arr[r]);
             exist=true
        }
        if(!exist){
            aa.push(-1)
        }
    }
    console.log(aa.join(" "));
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`8
  39 27 11 4 24 32 32 1`);
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
