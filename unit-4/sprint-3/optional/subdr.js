function sub(str,new_str,curr){
    if(new_str.length>0) console.log(new_str.join(" "));
    if(curr===str.length) return
    for(let i=curr;i<str.length;i++){
      new_str.push(str[i])
        sub(str,new_str,i+1);
        new_str=new_str.splice(0,new_str.length)
    }
    return ""
}
function runProgram(input) {
input=input.trim().split(" ");
let size=+(input[0]);
let arr=[]
for(let i=1;i<=size;i++){
arr.push(i)
}

//console.log(arr);
 console.log(sub(arr,[],0));

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3`);
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