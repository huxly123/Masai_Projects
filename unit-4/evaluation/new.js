function find(arr,curr_arr,curr,visited){
  if(curr_arr.length===0) console.log(" ");
  for(let i=curr;i<arr.length;i++){
    curr_arr.push(arr[i]);
    if(!visited[curr_arr.join("")]){
console.log(curr_arr.join(" "));
    }
    visited[curr_arr.join("")]=true;
    find(arr,curr_arr,i+1,visited);
    curr_arr.pop();
  }
}
function runProgram(input) {
input=input.trim().split("\n");
let size=+(input[0]);
let arr=input[1].trim().split(" ").map(Number);
let visited={};
find(arr,[],0,visited)

}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3
  1 2 2`);
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





