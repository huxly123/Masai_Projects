
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0])

var main=[]
for(let i=1;i<=cases;i++){
    var dim=input[i].trim().split(" ").map(Number);
    var q=dim[0];
    if(q==2){
        var add=dim[1];
        main.push(add);
        
    }
else if(q==1){
    if(main.length==0){
        console.log("No Food");
    }else{
        console.log(main[main.length-1]);
        main.pop();
    }
}

}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`6
  1
  2 5
  2 7
  2 9
  1
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