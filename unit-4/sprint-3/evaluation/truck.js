// function fac(a){
//     if(a==1||1===0){
//         return 1
//     }
//     return (a*fac(a-1))
//     }
var sum=0

function findStep(n,arr)
{
    if (n<0)
        return 0;
    if (n ===0)
        return 1;

    else
  
   for(let i=0;i<arr.length;i++){
        
      sum+=   findStep(n - arr[i],arr)

   }
   return sum
}
function runProgram(input) {
input=input.trim().split("\n");
let dim=input[0].trim().split(" ")
let k=+(dim[0])
let n=+(dim[1])
var arr=input[1].trim().split(" ").map(Number)
let str=""
str+=findStep()

console.log(findStep(k,arr));
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3 3
  1 2 3`);
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
