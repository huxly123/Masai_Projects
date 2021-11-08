function rec (arr,curr_arr,k,visited,curr){
if(curr_arr.length===k){
    curr_arr=curr_arr.sort((a,b)=>a-b);
    if(!visited[curr_arr.join(" ")]){
        console.log(curr_arr.join(" "));
        visited[curr_arr.join(" ")]=true
    }
}

    for(let i=curr;i<arr.length;i++){
curr_arr.push(arr[i])
rec(arr,curr_arr,k,visited,i+1);
curr_arr.pop()
    }
}
function runProgram(input) {
input=input.trim().split(" ").map(Number);
let n=+(input[0]);
let k=+(input[1]);
let arr=[]
for(let i=1;i<=n;i++){
    arr.push(i)
}
let visited={}
rec(arr,[],k,visited,0)
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`4 2`);
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


