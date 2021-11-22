var res=0

function lowerBound(arr, target, left, right) {
    if (left > right) {
        return
    }
    let mid = Math.floor(left + ((right - left) / 2));
    if (arr[mid] === target) {
        res = mid;
        return lowerBound(arr,target,left,mid-1)
}

   else if (arr[mid] < target) {
        return lowerBound(arr,target,mid+1,right)
    }
    else if (arr[mid] > target) {
        return lowerBound(arr,target,left,mid-1)
    }
}




function runProgram(input) {
        input = input.trim().split("\n");
        let dim = input[0].trim().split(" ");
        let n = +dim[0];
        let target = +dim[1];
        let arr = input[1].trim().split(" ").map(Number);
        lowerBound(arr, target, 0, arr.length - 1);
    if (res === 0) {
          console.log(-1);
    }
    else {
        console.log(res);
    }
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
