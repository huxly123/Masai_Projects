
function runProgram(input) {
input=input.trim().split("\n");
let cases=+(input[0]);
for(i=1;i<=cases;i++){
    let stack=[]
    let arr=input[i].trim().split("");
    var exists=true
for(j=0;j<arr.length;j++){
    if(arr[0]=="}"||arr[0]==")"||arr[0]=="]"){
    
    console.log("not balanced",i);
    var exists=false
    break;
    }
    else if(arr[j]=="{"||arr[j]=="("||arr[j]=="["){
        stack.push(arr[j])
    }
    else if(arr[j]=="}"||arr[j]==")"||arr[j]=="]"){
        if(arr[j]=="}"&&stack[stack.length-1]=="{"||arr[j]==")"&&stack[stack.length-1]=="("||arr[j]=="]"&&stack[stack.length-1]=="["){
            stack.pop();
        }
        else{
            var exists=false;
            console.log("not balanced",i);
            break;
        }
    }
}
if(stack.length!=0&&exists==true){
    console.log("not balanced",i);
}
 //if(exists==true){
   // console.log("balanced",i);
//}
 if(stack.length==0&&exists==true){
    console.log("balanced",i);
}
}
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`5
  ){(){[])}]
  ]]])}[(}}{
  {{}}
  [(){}{())[
  [}]{(}[[}[`);
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
