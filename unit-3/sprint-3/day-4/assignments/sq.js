
function runProgram(input) {
    input=input.trim().split("\n");
    var cases=+(input[0]);
    let Q1=[]
   
    for(i=1;i<=cases;i++){
        var dim=input[i].trim().split(" ");
        var X=+(dim[0]);
        if(X==0){
    let Y=+(dim[1])
Q1.push(Y)
        }
    if(X==1){
        console.log(Q1[Q1.length-1]);
    }
    if(X==2){
        Q1.pop()
    }
    }
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`6
  0 1
  0 2
  0 3
  1 
  2
  1`);
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
