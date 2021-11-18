var ans=[]

function rec(arr, k, left, right) {
    if (left > right) {
        return -1
    }
    let mid = Math.floor(left + ((right - left) / 2))
    if (k === arr[mid]) {
        ans.push(arr.indexOf(k));
        return ans.join("")
    }
    else if (k > arr[mid]) {
        return rec(arr,k,mid+1,right)
    }
    else if (k < arr[mid]) {
        return rec(arr,k,left,mid-1)
    }
}
function runProgram(input) {
    input = input.trim().split("\n");
    let dim = input[0].trim().split(" ");
    let n = +(dim[0]);
    let k = +(dim[1]);
    let arr = input[1].trim().split(" ").map(Number);
    arr=arr.sort((a,b)=>a-b)
    console.log(rec(arr, k, 0, arr.length - 1));
   
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 2
 1 2 2 5`);
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
