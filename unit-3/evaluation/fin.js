function runProgram(input) {
input=input.trim().split('\n');
let cases=+(input[0]);
let line=1;
for(let p=0;p<cases;p++){
let size=+(input[line++]);
let arr=input[line++].trim().split(" ").map(Number);
let stack=[];
let ans=[];
let obj=[]
for(let i=0;i<arr.length;i++){
    //console.log(stack);
    if(i==0){
        obj.push(i)
        ans.push(1);
        stack.push(arr[i])
    }else{
        //let count=0
        for(let j=stack.length-1;j>=0;j--){
            
            if(arr[i]<stack[j]){
                obj.push(i);
                stack.push(arr[i]);
            
                ans.push(i-obj[j])
                break
            }
            if(arr[i]>=stack[j]){
                obj.pop();
                stack.pop()
               // count++
            }
        }
        if(stack.length==0){
            obj.push(i);
            stack.push(arr[i]);
            ans.push(i+1)
        }
    }
    
}
console.log(ans.join(" "));
}


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  7
  100 80 60 70 60 75 85
  5
  3 5 0 9 8`);
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
