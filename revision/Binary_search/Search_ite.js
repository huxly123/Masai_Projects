function search(arr, n, k) {
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid =Math.floor(left + ((right - left) / 2))
    if (arr[mid] == k) {
      return 1
    }
   else if (arr[mid] < k) {
     left= mid+1
    }
   else if (arr[mid] > k) {
      right=mid-1;
    }
  }
  return -1
}


function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let k = +(input[2])
console.log(search(arr, n, k));
  // console.log(ite(arr,k));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
1 2 3 5 6
4`);
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
