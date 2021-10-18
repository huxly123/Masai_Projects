function  removeDups( s)
{
    if ( s.length <= 1 ) return s;
    if( s.substring(0,s.length-1).includes(s.substring(s.length-1,s.length)) ) return removeDups(s.substring(0,s.length-1));
    else return removeDups(s.substring(0,s.length-1)) + s.substring(s.length-1,s.length);
}


function runProgram(input) {
let str=input.trim()
let ans=(removeDups(str));
ans=ans.split("")
for(let i=0;i<ans.length;i++){
    if(ans[i]==" "){
        ans.splice(i,i-1)
    }
}
let strin="";
for(let i=0;i<ans.length;i++){
    strin=strin+ans[i]
}
console.log(strin);
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`my name is ankush`);
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
