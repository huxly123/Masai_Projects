var flag=false
function sub(str,new_str,curr,k){
  
  for(let i=curr;i<str.length;i++){
    new_str.push(str[i])
    var sum=0
    for(let l=0;l<new_str.length;l++){
      sum+=new_str[l]
    }
    if(sum===k){
      flag=true;
      break;
    }
      sub(str,new_str,i+1,k);
    new_str.pop()
  }
 
}
function runProgram(input) {
input=input.trim().split("\n");
let size=+(input[0]);
let arr=input[1].trim().split(" ").map(Number);
let k=+(input[2]);
sub(arr,[],0,k)
if(flag==true)
console.log("yes")
else{
  console.log("No");
}
}

if (process.env.USERNAME === 'huxly') {
  runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`);
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

