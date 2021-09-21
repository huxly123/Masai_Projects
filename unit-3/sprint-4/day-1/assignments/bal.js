
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);


for(let p=1;p<=cases;p++){
    let stack=[];
    var exist=true
    let arr=input[p].trim().split("")
    for(let i=0;i<arr.length;i++){
        if(arr[0]=="}"||arr[0]=="]"||arr[0]==")"){
            console.log("not balanced");
            exist=false
            break;
        }
        if(arr[i]=="{"||arr[i]=="["||arr[i]=="("){
stack.push(arr[i])
        }
        if(arr[i]=="}"&&stack[stack.length-1]=="{"||arr[i]=="]"&&stack[stack.length-1]=="["||arr[i]==")"&&stack[stack.length-1]=="("){
            stack.pop()
        }
    }
if(stack.length!=0&&exist==true){
    console.log("not balanced");
}
if(stack.length==0&&exist==true){
    console.log("balanced");
}
}


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3
  {([])}
  ()
  ([]
  `);
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
