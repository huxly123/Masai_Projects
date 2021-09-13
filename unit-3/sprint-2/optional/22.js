function runProgram(input) {
    input=input.trim().split("\n");
    var cases=+(input[0]);
    var line=1
    for(var p=0;p<cases;p++){
   var size=+(input[line++]);
   var arr=input[line++].trim().split(" ").map(Number);
   
     var ans=[]
     var stack=[]
     for(var i=size-1;i>=0;i--){
       if(i==size-1){
         ans.push(0)
         stack.push(arr[i])
       }
       else{
     
       for(var j=stack.length-1;j>=0;j--){
         if(arr[i]>stack[j]){
           ans.push(stack[j])
           stack.push(arr[i]);
           break;
         }
         if(arr[i]<stack[j]){
           
           stack.pop()
         }
       }
       if(stack.length==0){
         ans.push(0);
         stack.push(arr[i])
       }
     }
     }
     var cum=0
    for(var r=0;r<ans.length;r++){
        cum=cum+ans[r]
    }
    console.log(cum);
    }
   
     }
     if (process.env.USERNAME === 'huxly') {
       runProgram(`2
       4
       4 3 1 2
       4
       1 2 3 4`);
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