
function runProgram(input) {
    input=input.trim().split("\n");
    let cases=+(input[0]);
    let line=1
    for(p=1;p<=cases;p++){
    let size=+(input[line++]);
    let arr=input[line++].trim().split(" ").map(Number);
  let obj=[]
  let main=[]
let stack=[]
for(var i=0;i<size;i++){
    if(i==0){
        obj.push(i);
        stack.push(arr[i])
        main.push(1)
    }
    else{
        for(var j=stack.length-1;j>=0;j--){
           // console.log(obj,main,stack);
            if(arr[i]<stack[j]){
                obj.push(i);
                stack.push(arr[i])
                main.push(i-obj[j]);
                break;
            }
            if(arr[i]>=stack[j]){
               obj.pop();
               stack.pop();
            }
        }
        if(stack.length==0){
            obj.push(i);
            stack.push(arr[i]);
            main.push(i+1)
        }
    }
}
console.log(main.join(" "));
    }
    
    }
    if (process.env.USERNAME === 'huxly') {
      runProgram(`1
      7
      0 0 0 0 0 0 1
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
    