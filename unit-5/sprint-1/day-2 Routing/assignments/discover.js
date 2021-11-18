function rec(arr, k, left, right) {
    if (left > right) {
        return "NO"
    }
    let mid = Math.floor(left + ((right - left) / 2))
    if (k === arr[mid]) {
        return "YES"
    }
    else if (k > arr[mid]) {
        return rec(arr,k,mid+1,right)
    }
    else if (k < arr[mid]) {
        return rec(arr,k,left,mid-1)
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let dim = input[0].trim().split(" ").map(Number)
    let size = +(dim[0])
    let n = +(dim[1]);
    let arr = input[1].trim().split(" ").map(Number);
    arr=arr.sort((a,b)=>a-b)
    let newn = n - 1;
    let line=2
    for (let i = 0; i <= newn; i++){
        let number = +(input[line++])
        console.log(rec(arr,number,0,arr.length-1));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`);
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
