function rec(arr, k, left, right) {
    if (left > right) {
        return -1
    }
let mid=Math.floor(left+((right-left)/2))
    if (k < arr[mid]) {
       return rec(arr,k,left,mid-1)
    }
  else  if (k > arr[mid]) {
      return  rec(arr,k,mid+1,right)
    }
    else if (k == arr[mid]) {
        return 1
    }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let dim1 = input[0].trim().split(" ").map(Number);
  let n = +dim1[0];
  let k = +dim1[1];
  let arr = input[1].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b);
    
  console.log(rec(arr, k,0,arr.length-1));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 0
2 -2 6 3 4`);
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