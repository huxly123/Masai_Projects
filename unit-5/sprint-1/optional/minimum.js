function minimum(arr, left, right) {
    if (left == right) {
        return arr[left]
    }
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] > arr[right]) {
        return minimum(arr,mid+1,right)
    }
    else if (arr[mid] < arr[right]) {
        return minimum(arr,left,mid)
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(minimum(arr,0,arr.length-1));

}
if (process.env.USERNAME === "huxly") {
  runProgram(`10
4 6 -4 -3 -2 -1 0 1 2 3`);
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
