
function runProgram(input) {
input=input.trim().split("\n");
let cas1=input[0].trim().split(" ").map(Number);
let size=+(cas1[0]);
let cases=+(cas1[1]);
let stack=[]
//console.log(size,cases);
for(let p=1;p<=cases;p++){
    let dim=input[p].trim().split(" ").map(Number);
    let con=dim[0]
   // console.log((con));
    if(con==1){
        let x=dim[1];
     //   console.log(x);
if(stack.length<size||stack.length==0){
    stack.push(x)
    console.log(x);
}
else if(stack.length>=size){
    console.log(-1);
}
    }
    else if(con==2){
        if(stack.length!=0){
        let pp=stack.shift();
        console.log(pp);
    }else{
        console.log(-1);
    }

}
}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2 6
  1 1
  1 2
  1 3
  2
  2
  2`);
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
