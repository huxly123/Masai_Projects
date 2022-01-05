let Upperbound_index = -1;
function Upperbound(arr, k, left, right) {
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] < k) {
      left = mid + 1;
    } else if (arr[mid] > k) {
      Upperbound_index = mid;
      right = mid - 1;
    } else if (arr[mid] === k) {
      left = mid + 1;
    }
  }
  return Upperbound_index; //upperboundindex will give index of num greater than tar  inorder to get tar at max position either return right
  //or return upperboundindex-1
}

function runProgram(input) {
  input = input.trim().split("\n");
  let dim = input[0].trim().split(" ").map(Number);
  let n = +dim[0];
  let k = +dim[1];
  let arr = input[1].trim().split(" ").map(Number);
  console.log(Upperbound(arr, k, 0, n - 1));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`10 3
0 2 4 4 5 5 7 7 9 10`);
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
