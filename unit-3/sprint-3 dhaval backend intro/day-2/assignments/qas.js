function runProgram(input) {
input=input.trim().split("\n");
var cases=+(input[0]);
var que=[];
var stack=[];
var f=0;
for(var i=1;i<=cases;i++){
    var dim=input[i].trim().split(" ").map(Number);
    var con=dim[0];
    
    if(con==1){
        var add=dim[1];
        que.push(add)
    }
    else if(con==2){
        var add=dim[1];
        stack.push(add);

    }
    else if(con==3){
        if(que.length==0){
            console.log(-1);
        }
        else{
        console.log(que[f]);
        }
    }
    else if(con==4){
        if(que.length==0){
            console.log(-1);
        }else{
        console.log(stack[stack.length-1]);
       
        }
    }
    else if(con==5){
        stack[stack.length]=que[f];
        f++
    }
}

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`10
  1 99999
  2 10000
  3
  4
  1 300
  4
  2 444
  5
  4
  3`);
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
