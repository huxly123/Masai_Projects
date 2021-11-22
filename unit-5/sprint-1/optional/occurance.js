var lower = 0;
var upper=0

function lowerBound(arr, target, left, right) {
    if (left > right) {
        return
    }

    let mid = Math.floor(left + ((right - left) / 2));
    if (arr[mid] === target) {
        lower = mid;
        lowerBound(arr,target,left,mid-1)
    }
   else if (arr[mid] < target) {
        return lowerBound(arr,target,mid+1,right)
    }
    else if (arr[mid] > target) {
        return lowerBound(arr,target,left,mid-1)
    }
}

function upperBound(arr, target, left, right) {
    if (left > right) {
        return
    }
    let mid = Math.floor(left + ((right - left) / 2));
    if (arr[mid] <= target) {
        return upperBound(arr,target,mid+1,right)
    }
    else if (arr[mid] > target) {
        upper=mid
        return upperBound(arr,target,left,mid-1)
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let dim = input[0].trim().split(" ");
    let n = +dim[0];
    let target = +dim[1];
    let arr = input[1].trim().split(" ").map(Number);
    lowerBound(arr, target, 0, arr.length - 1);
    upperBound(arr, target, 0, arr.length - 1);
    if (upper == 0) {
      upper = arr.length;
    }
    if (upper !== 0 && lower !== 0) {
        console.log(upper-lower);
    }
    
    if (lower == 0) {
        console.log(upper);
    }
//   console.log(lower,upper);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`10 22
22 22 22 22 22 22 22 22 22 21
`);
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
