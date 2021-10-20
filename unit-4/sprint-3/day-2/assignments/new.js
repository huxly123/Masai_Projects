function run(str){
    if(str.length<=str.length){
        console.log(str);
            }
    for(let i=0;i<str.length;i++){
        let re=str.substring(i)
        run(re)
    }
 
}
function runProgram(input) {
input=input.trim().split("\n");
let size=+(input[0]);
let arr=input[1].trim().split("");
let str=arr.join("")
//run(str)
console.log(str);
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`4
  abcd`);
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
