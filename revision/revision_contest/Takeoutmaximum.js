function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    k=k-1
    
          let max = 0;
     for (let i = 0; i <= k; i++) {
       max += arr[i];
     }
    let start = 1
    k++
    let sum=max
    while (k < n) {
  
    
        sum = sum + (arr[k] - arr[start-1])
        
        if (sum > max) {
            max=sum
        }
//    console.log(start, k,sum);
        start++
        k++
    }
    console.log(max);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`10 3
-1 -1 -2 1 -2 4 1 9 3 9`);
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
