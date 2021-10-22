function bin (str,res){
if(str<=1){
    return (1+res)
}
res=str%2+res;
return bin(Math.floor(str/2),res)
}
function runProgram(input) {
 input=input.trim().split("\n");
let cases=+(input[0]);
for(let i=1;i<=cases;i++){
let str=input[i].trim().split(" ").map(Number);
console.log(bin(str,res=""));
}


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  15
  128`);
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