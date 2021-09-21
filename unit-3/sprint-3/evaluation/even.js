
function runProgram(input) {
    input=input.trim().split("\n");
    let cases=+(input[0])
    let line=1
    for(let p=0;p<cases;p++){
        let size=+(input[line++]);
        let arr=input[line++].trim().split(" ").map(Number);
      let sum=0;
      let ans=[]
       let stack=[]
        for(let i=0;i<=size-1;i++){
            if(arr[i+1]>arr[i]){
               ans.push(arr[i])
                stack.push(arr[i+1])
            }
            
    }
    
   for(let i=0;i<stack.length;i++){
       if(stack[i]%2==0){
           sum=sum+ans[i]
       }
   }
   console.log(sum);
    }
    }
    if (process.env.USERNAME === 'huxly') {
      runProgram(`1
      5
      2 3 5 8 3`);
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