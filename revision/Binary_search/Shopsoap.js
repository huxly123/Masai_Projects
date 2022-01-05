//https://oj.masaischool.com/contest/2387/problem/02
let ans_index = -1;
function equalUpperbound(arr, k, left, right) {
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] < k) {
            left=mid+1;
        }
        else if (arr[mid] > k) {
            ans_index = mid;
            right=mid-1;
        }
        else if (arr[mid] === k) {
            ans_index = mid;
            right=mid-1;
        }
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
  arr=arr.sort((a,b)=>a-b)
    let ss = +(input[2]);
    for (let i = 3; i < ss + 3; i++){
        let k=+(input[i])
        equalUpperbound(arr, k, 0, n - 1);
        // console.log("ans_index", ans_index);
        if (ans_index == -1) {
            console.log(n);
        } else {
            console.log(ans_index);
        }
        ans_index=-1
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
1 4 10 5 6
4
2
3
5
11`);
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



