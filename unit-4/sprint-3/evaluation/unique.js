
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
let line=1
for(let i=0;i<cases;i++){
    let size=+(input[line++])
    let arr=input[line++].trim().split(" ").map(Number)
    let obj={}
    for(let j=0;j<arr.length;j++){
        if(obj[arr[j]]===undefined){
            obj[arr[j]]=1
        }
        else{
            obj[arr[j]]=obj[arr[j]]+1
        }
    }
    let bb=Object.keys(obj)
    let cc=Object.values(obj);
    for(let k=0;k<cc.length;k++){
        if(cc[k]==1){
            console.log(bb[k]);
        }
    }
}


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  1
  5
  5
  1 2 1 3 2`);
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
