function sub(str,new_str,curr){
    if(new_str.length>0) console.log(new_str);
    if(curr===str.length) return
    for(let i=curr;i<str.length;i++){
        new_str=new_str+str[i];
        sub(str,new_str,i+1);
        new_str=new_str.slice(0,new_str.length-1)
    }
    return ""
}
function runProgram(input) {
input=input.trim().split(" ");
let size=+(input[0]);
let str=""
for(let i=1;i<=size;i++){
str+=i
}

 console.log(sub(str,"",0));

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`4`);
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

