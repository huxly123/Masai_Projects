
function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
var line=1;
for(var i=0;i<cases;i++){
    var n=+(input[line]);
    line++;
    var arr=input[line].trim().split(" ").map(Number);
    line++;
    var k=+(input[line])
    line++;
    var l=0;r=n-1
    var aa=arr.sort()
    var rr=[]
 while(l<r){
     if(aa[l]+aa[r]<=k){
       rr.push(aa[l]+aa[r])
       l++;
       var exist=true
     }else{
         console.log(-1);
         break;
     }

 }
 if(!exist){

 }else{
var k=rr.sort();
console.log(k[k.length-1]);
 }
}
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  5
  1 2 3 4 5
  7
  3
  30 10 20
  15`);
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
