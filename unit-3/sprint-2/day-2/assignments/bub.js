
function runProgram(input) {
input=input.trim().split("\n");
var dim=input[0].trim().split(" ").map(Number);
var n=+(dim[0]);
var k=+(dim[1]);
var arr=input[1].trim().split(" ").map(Number);
for(var i=0;i<n;i++){
    for(var j=0;j<n-i-1;j++){
        if(arr[j]%k>arr[j+1]%k){
            var temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log(arr.join(" "));
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`5 6
  12 18 17 65 46`);
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
