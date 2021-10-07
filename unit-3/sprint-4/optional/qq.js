
function runProgram(input) {
    input=input.trim().split("\n");
    let size=+(input[0]);
        let q1=input[1].trim().split(" ").map(Number);
        let q2=input[2].trim().split(" ").map(Number);
        let happened=true
        let count=0
while(happened==true){
    let doo=true
    let stack=[]
    while(q1[0]!==q2[0]){
stack.push(q1.shift())
count++
    }
 
  q1=q1.concat(stack)
  for(let i=0;i<size;i++){
      if(q1[i]!=q2[i]){
doo=false
      }
  }
  if(doo==true){
  
      happened=false
  }
}
console.log(count+size);
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`5
  2 3 4 5 1
  1 2 3 5 4`);
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
