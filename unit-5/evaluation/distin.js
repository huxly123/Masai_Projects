function threeMaxThreeMin(N, arr) {
  arr = arr.sort((a, b) => a - b);
    let a=[]
    for (let i = 0; i < arr.length; i++){
        if (i == arr.length - 1) {
            if (arr[i] !== arr[i - 1]) {
                   a.push(arr[i]);
            }
        } else {
            if (arr[i] !== arr[i + 1]) {
                a.push(arr[i])
            }
        }
    }
    let ans=[]
    if (a.length < 3) {
        console.log("Not Possible");
          console.log("Not Possible");
    }
   else  {
        ans.push(a[0], a[1], a[2])
        console.log(ans.join(" "));
       
    
        ans = []
        ans.push(a[a.length - 3], a[a.length - 2], a[a.length - 1]);
         console.log(ans.join(" "));
    }
  
}

function runProgram(input) {
  input = input.trim().split("\n");
  let N = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    threeMaxThreeMin(N,arr)
}
if (process.env.USERNAME === "huxly") {
  runProgram(`8
1 2 3 4 2 1 6 5`);
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
