var lower=0

function lowerBound(arr, target, left, right) {
  if (left > right) {
    return;
  }
  let mid = Math.floor(left + (right - left) / 2);
  if (arr[mid] === target) {
    lower = mid;
    return lowerBound(arr, target, left, mid - 1);
  } else if (arr[mid] < target) {
    return lowerBound(arr, target, mid + 1, right);
  } else if (arr[mid] > target) {
    return lowerBound(arr, target, left, mid - 1);
  }
}

var higher = 0

function upperBound(arr, target, left, right) {
  if (left > right) {
    return;
  }
  let mid = Math.floor(left + (right - left) / 2);
  if (arr[mid] <= target) {
    return upperBound(arr, target, mid + 1, right);
  } else if (arr[mid] > target) {
    higher = mid;
    return upperBound(arr, target, left, mid - 1);
  }
}




function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let target = +(input[2])
    lowerBound(arr, target, 0, arr.length - 1);
    upperBound(arr, target, 0, arr.length - 1);
    let ans = [];
    if (higher == 0) {
        higher=arr.length
    }
    let occurance = higher - lower;
    higher=higher-1
    ans.push(lower, higher, occurance)
    console.log(ans.join(" "));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
1 2 3 4 5
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
