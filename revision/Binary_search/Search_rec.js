
function search(arr, k,left,right) {
    if (left > right) {
        return -1
    }
    let mid = Math.floor((left + right) / 2)
  if(arr[mid] < k) {
      return  search(arr,k,mid+1,right)
    }
  else if (arr[mid] > k) {
     return search(arr,k,left,right-1)
    }
  else if (arr[mid] === k) {
      return mid
    }
}


function runProgram(input) {
      input = input.trim().split("\n");
      let n = +input[0];
      let arr = input[1].trim().split(" ").map(Number);
      let k = +input[2];
      console.log(search(arr, k,0,n-1));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
1 2 3 5 6
5`);
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
