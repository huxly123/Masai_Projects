var main_arr=[]
function doc(arr,curr_arr,curr){
    if(curr_arr.length>0) {
    main_arr.push(curr_arr.join(' '));}

    if(curr==arr.length) return
    for(let i=curr;i<arr.length;i++){
        curr_arr.push(arr[i])
        doc(arr,curr_arr,i+1)
        curr_arr.pop()
    }
    return ""
}
function runProgram(input) {
input=input.trim().split("\n")
let size=+(input[0]);
let arr=input[1].trim().split(" ").map(Number)
arr=arr.sort()
console.log(" ");
doc(arr,[],0)
let ans_arr=[]
// main_arr=main_arr.map(Number)
for(let i=0;i<main_arr.length;i++){
if(!ans_arr.includes(main_arr[i])){
    ans_arr.push(main_arr[i])
}
}
ans_arr=ans_arr
console.log(ans_arr);
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  10 3`);
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