
function Lowebound(arr, k, left, right) {
  let Lowebound_index=-1
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] <k) {
      left=mid+1;
    }
    else if (arr[mid] > k) {
      right=mid-1;
    }
    else if (arr[mid] == k) {
      Lowebound_index=mid
      right=mid-1;
    }
  }
  return Lowebound_index
}


function runProgram(input) {
  input = input.trim().split("\n");
  let dim = input[0].trim().split(" ").map(Number);
  let n = +(dim[0]);
  let k = +(dim[1]);
  let arr = input[1].trim().split(" ").map(Number);
console.log(Lowebound(arr,k,0,n-1));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 2
1 1 2 2 5`);
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
