
function runProgram(input) {
let obj={};
let str=input.trim();
for(let i=0;i<str.length;i++){
    if(obj[str[i]]==null){
        obj[str[i]]=1
    }
}
let ans=Object.keys(obj)

for(let i=0;i<ans.length;i++){
    if(ans[i]==" "){
        ans.splice(i,i-1)
    }
}
let strin="";
for(let i=0;i<ans.length;i++){
    strin=strin+ans[i]
}
console.log(strin);}
if (process.env.USERNAME === 'huxly') {
  runProgram(`aa`);
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
