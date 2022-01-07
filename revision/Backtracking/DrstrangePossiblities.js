function Subset(arr, curr_arr, curr) {
    if (curr_arr.length <= arr.length) {
        console.log(curr_arr.join(" "));
    }
    if (curr_arr.length == arr.length) {
    return    
    }
    for (let i = curr; i < arr.length; i++){
        curr_arr.push(arr[i]);
        Subset(arr, curr_arr, i + 1);
        curr_arr.pop()
    }
}
function runProgram(input) {
    let n = +(input);
    let arr=[]
    for (let i = 1; i <= n; i++){
        arr.push(i)
    }
    Subset(arr,[],0)
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3`);
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
