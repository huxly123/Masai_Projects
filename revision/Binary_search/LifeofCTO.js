
let Upperbound_index=-1

function cto(arr, k, left, right) {
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] < k) {
            left=mid+1;
        }
        else if (arr[mid] == k) {
            left=mid+1;
        }
        else if (arr[mid] > k) {
            Upperbound_index = mid;
            right=mid-1;
        }
    }
    return Upperbound_index
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let k = 0;
    console.log(cto(arr,k,0,n-1));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
0 0 0 0 0`);
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
