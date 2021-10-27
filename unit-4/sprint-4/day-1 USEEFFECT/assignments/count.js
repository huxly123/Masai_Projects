var count=0
function subs(arr,curr_arr,curr,k){
for(let i=curr;i<arr.length;i++){
    curr_arr.push(arr[i])
    let sum=0
for(let j=0;j<curr_arr.length;j++){
sum+=curr_arr[j]

}
if(sum==k) count++
    subs(arr,curr_arr,i+1,k)
    curr_arr.pop()
}
return count

}
function runProgram(input) {
input=input.trim().split("\n");
let dim=input[0].trim().split(" ")
let size=+(dim[0]);
let num=+(dim[1]);
let arr=input[1].trim().split(" ").map(Number)
console.log(subs(arr,[],0,num));

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`10 15
  1 2 3 5 6 8 10 2 4 7`);
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