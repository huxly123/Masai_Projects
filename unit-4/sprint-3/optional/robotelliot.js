function strr(str){
if(str.length<=1) return str
let mid=Math.floor((str.length+1)/2)-1
return str[mid]+strr(str.slice(0,mid))+strr(str.slice(mid+1,str.length))
}
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
let line=1
for(let i=0;i<cases;i++){
    let size=+(input[line++]);
    let str=input[line++].trim().split("");
console.log(strr(str,));
}


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3
  3
  abc
  4
  abcd
  11
  abcdefghijk`);
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

