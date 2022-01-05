//https://oj.masaischool.com/contest/2387/problem/01
let upperbound_index = -1;
function upperbound(arr, k, left, right) {
    
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
      if (arr[mid] < k) {
        
        left=mid+1;
      } else if (arr[mid] > k) {
          upperbound_index=mid
          right=mid-1;
      } else if (arr[mid] === k) {
          left=mid+1;
    }
    }
    return upperbound_index
}

let lowebound_index=-1
function lowerbound(arr, k, left, right) {
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] < k) {
            left=mid+1;
        }
        if (arr[mid] > k) {
             right=mid-1;
        }
        if (arr[mid] == k) {
            lowebound_index = mid;
            right=mid-1;
         }
    }
}

function runProgram(input) {
  input = input.trim().split("\n");
  let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a - b);
  let size = +input[2];
  for (let i = 3; i < size + 3; i++) {
    let dim = input[i].trim().split(" ").map(Number);
      let condition = +dim[0];
    //   console.log("con", condition);
      let k = +dim[1];
      upperbound(arr, k, 0, n - 1)
      lowerbound(arr,k,0,n-1)
      if (upperbound_index == -1) {
          upperbound_index=n
      }
      if (condition === 1) {
          console.log(n - upperbound_index);
      } else {
          if (lowebound_index == -1) {
              console.log(n - upperbound_index);
          } else {
              console.log(n - lowebound_index);
          }
      }
      upperbound_index = -1
      lowebound_index=-1
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);
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
