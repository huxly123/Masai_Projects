function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
let que=[];
let f=0;
let r=0
for(var i=1;i<=cases;i++){
    let dim=input[i].trim().split(" ");
    let con=dim[0];
    
    if(con=="E"){
        var add=+(dim[1]);
        que[f]=add;
        f++;
    console.log(f-r);
    }
    if(con=="D"){
var del=[]
if(que[r]==null){
del.push(-1);
del.push(f-r)
}else{
del.push(que[r]);
r++;
del.push(f-r);

}
console.log(del.join(" "));
    }
}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`5
  E 2
  D
  D
  E 3
  D`);
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
