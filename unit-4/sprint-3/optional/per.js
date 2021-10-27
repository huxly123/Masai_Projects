function perm(arr,curr){
    if(curr==arr.length){
        console.log(arr.join(" "));
        return
    }
    for(let i=curr;i<arr.length;i++){
        let temp=arr[i]
        arr[i]=arr[curr]
        arr[curr]=temp
        perm(arr,curr+1)
        let emp=arr[i]
        arr[i]=arr[curr]
        arr[curr]=emp

    }
    return  ""
}
function runProgram(input) {
input=input.trim().split("\n");
let size=+(input[0]);
let arr=input[1].trim().split(" ").map(Number)
console.log(perm(arr,0));


}
if (process.env.USERNAME === 'huxly') {
  runProgram(`3
  1 2 3`);
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

