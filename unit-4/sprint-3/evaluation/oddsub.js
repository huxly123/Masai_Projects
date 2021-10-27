var count=0
function sub(str,new_str,curr){
  
    for(let i=curr;i<str.length;i++){
      new_str.push(str[i])
      var sum=0
      for(let l=0;l<new_str.length;l++){
        sum+=new_str[l]
      }
     sum=Math.abs(sum)
     if(sum%2==1){
         count++
     }
        sub(str,new_str,i+1);
      new_str.pop()
    }
   return ""
  }
function runProgram(input) {
input=input.trim().split("\n");
let size=+(input[0]);
let arr=input[1].trim().split(" ").map(Number);
sub(arr,[],0)

console.log(count);
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  -2 -1`);
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
