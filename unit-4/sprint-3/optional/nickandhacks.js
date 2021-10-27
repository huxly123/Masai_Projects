function find(num){
    if(num==1)  return "Yes"
if(num==10)  return "Yes"
if(num%10!=0) return "No"
    //find(num/20)
     find(num/10)
}

function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
for(let i=1;i<=cases;i++){
    let num=+(input[i])
    console.log(find(num));
}


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`5
  1
  2
  1000
  25
  200`);
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

