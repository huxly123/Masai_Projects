function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number);
        let stack = [];
        let ans=[]
        for (let i = 0; i < arr.length; i++){
            if (i == 0) {
                stack.push(arr[i])
                ans.push(arr[i+1])
            }
          
            for (let j = stack.length - 1; j >= 0; j--){
                    
                if (arr[i] < stack[j]) {
                     
                        stack.pop();
                       
                    } if (arr[i] > stack[j]) {
                   ans.push(stack[j])
                        stack.push(arr[i])
                    break
                    }
                }
            
             if(stack.length==0){
    ans.push(-1);
    stack.push(arr[i])
  }
        }
        console.log(ans.join(" "));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
8
39 27 11 4 24 32 32 1`);
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
