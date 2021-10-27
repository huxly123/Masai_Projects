var dress=[]
function perm(arr,curr){
    if(curr==arr.length-1){
         dress.push(arr.join(" "))
        // console.log(arr.join(" "));
        return
    }
    for(let i=curr;i<arr.length;i++){
        let temp=arr[curr]
        arr[curr]=arr[i]
        arr[i]=temp
        perm(arr,curr+1)
         let emp=arr[curr]
        arr[curr]=arr[i]
        arr[i]=emp

    }
    return  ""
}
function runProgram(input) {
input=input.trim().split("\n");
let size=+(input[0]);
let arr=input[1].trim().split(" ").map(Number)
perm(arr,0)
//console.log(dress);
var result=dress.sort()
//console.log(result);
for(let i=0;i<result.length;i++){
    console.log(result[i])
}

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