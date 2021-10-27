function rec(total){
    if(total.length==1) return total
let str=0
   for(let i=0;i<total.length;i++){
       str+=+(total[i])
   }
   
   str=str.toString()
   
 return  rec(str)
}
function runProgram(input) {
input=input.trim().split(" ")
let n=input[0]
let k=input[1]
let count=0
for(let i=0;i<n.length;i++){
count+=+(n[i])
}
let total=count*k
total=total.toString()
console.log(rec(total));
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`123 3`);
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

