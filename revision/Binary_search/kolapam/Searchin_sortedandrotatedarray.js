function search(arr, left,right, key) {
  if (left >right) return -1;

  let mid = Math.floor((left +right) / 2);
  if (arr[mid] == key) return mid;

  if (arr[mid]>=arr[left]) {
    if (key >= arr[left] && key <= arr[mid]) return search(arr, left, mid - 1, key);
    return search(arr, mid + 1,right, key);
  } else {
    if (key >= arr[mid] && key <= arr[h]) return search(arr, mid + 1,right, key);

    return search(arr, left, mid - 1, key);
  }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let dim = input[0].trim().split(" ").map(Number);
  let n = +dim[0];
  let target = +dim[1];
  let arr = input[1].trim().split(" ").map(Number);
  console.log(search(arr,0,n-1,target));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 1
3 4 5 1 2`);
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
