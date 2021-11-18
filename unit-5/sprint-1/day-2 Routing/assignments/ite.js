function ite(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == k) {
      return 1
    }
   else if (arr[mid] < k) {
      left=mid+1
    }
   else if (arr[mid] > k) {
    right=mid-1
    }
  }
  return -1
}



function runProgram(input) {
     input = input.trim().split("\n");
     let dim1 = input[0].trim().split(" ").map(Number);
     let n = +dim1[0];
     let k = +dim1[1];
     let arr = input[1].trim().split(" ").map(Number);
     arr = arr.sort((a, b) => a - b);
       console.log(ite(arr,k));
   
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 0
2 -2 0 3 4`);
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
