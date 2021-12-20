function ways (arr,n, cap) {
    if (cap <= 0) {
       return 0
    }
   

    for (let i = arr.length-1; i >=0; i--){
        return ways(arr,n-1,cap-arr[i])
    }
    return cap
}


function runProgram(input) {

     input = input.trim().split("\n");
     let dim = input[0].trim().split(" ").map(Number);
     let n = dim[0]-1;
     let cap = dim[1];
     let arr = input[1].trim().split(" ").map(Number);
    arr = arr.sort((a, b) => a + b);
   
    console.log(ways(arr, n, cap));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1 1000000
  1`);
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
