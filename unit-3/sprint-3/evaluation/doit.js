
function runProgram(input) {
input=input.trim().split("\n");
let size=+(input[0]);
    let q1=input[1].trim().split(" ").map(Number);
    let q2=input[2].trim().split(" ").map(Number);
    let count=0;
while(q1.length!=0){
let temp=q1.shift()
for(let i=0;i<q2.length;i++){
    if(q2[i]==temp){
q2.splice(i,1)
        count++
        break;
    }else{
        count++
    }
}
}
console.log(count);


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3
  3 2 1
  1 3 2`);
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