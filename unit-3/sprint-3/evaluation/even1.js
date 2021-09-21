
function runProgram(input) {
    input=input.trim().split("\n");
    let cases=+(input[0])
    let line=1
    for(let p=0;p<cases;p++){
        let size=+(input[line++]);
        let arr=input[line++].trim().split(" ").map(Number);
      let sum=0
       let stack=[]
        for(let i=size-1;i>=0;i--){
     if(i==size-1){
stack.push(arr[i])

     }

     else{
         for(var j=stack.length-1;j>=0;j--){
             if(arr[i]>stack[j]){
                 stack.pop()
                
             }
             if(arr[i]<stack[j]){
                 if(stack[j]%2==0){
                 sum=sum+arr[i]
             }
                 stack.push(arr[i]);
break;
             }
         }
         if(stack.length==0){
             stack.push(arr[i])
         }
     }
    }
   // console.log(stack);
   console.log(sum);
    }
    }
    if (process.env.USERNAME === 'huxly') {
      runProgram(`1
      6
      6 10 4 8 3 8
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