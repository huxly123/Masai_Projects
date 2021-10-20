function perm(str,result){
    if(str.length==0){
        let arr=[]
        for(let i=0;i<result.length;i++){
            arr.push(result[i])
        }
        console.log(arr.join(" "));
    }
    for(let i=0;i<str.length;i++){
        let rest=str.substring(0,i)+str.substring(i+1);
        perm(rest,result+str[i])
    }
}
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
let arr=input[1].trim().split(" ")

let str=arr.join("")
perm(str,'')

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3
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