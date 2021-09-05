
function runProgram(input) {
input=input.trim().split("\n");
var dim=input[0].trim().split(" ");
var size=+(dim[0]);
var target=+(dim[1]);
var arr=input[1].trim().split(" ").map(Number);
var count=0;
var i=0;
while(i<size){
    for(var j=i+1;j<size;j++){
        if(arr[i]+arr[j]==target){
          
       
            count++;
        }
       
    }
    i++
    }
    console.log(count);
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`5 9
  3 0 6 2 7`);
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
