let Lowebound_index = -1;
function Lowebound(arr, k, left, right) {

    if (left > right) {
    return Lowebound_index;
    }
    let mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] < k) {
        return Lowebound(arr,k,mid+1,right)
    }
    else if (arr[mid] > k) {
        return Lowebound(arr,k,left,mid-1)
    }
    else if (arr[mid] === k) {
        Lowebound_index = mid;
        return Lowebound(arr,k,left,mid-1)
}


}


function runProgram(input) {
     input = input.trim().split("\n");
     let dim = input[0].trim().split(" ").map(Number);
     let n = +dim[0];
     let k = +dim[1];
     let arr = input[1].trim().split(" ").map(Number);
     console.log(Lowebound(arr, k, 0, n - 1));
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
