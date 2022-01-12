let count=0

function Subset(arr, curr_arr, curr) {
    if (curr_arr.length > 0) {
        let sum=0
        for (let i = 0; i < curr_arr.length; i++){
            sum+=curr_arr[i]
        }
        sum=Math.abs(sum)
        if (sum % 2 == 1) {
            count++
        }
    }
    if (curr_arr.length == arr.length) {
        return
    }
    for (let i = curr; i < arr.length; i++){
        curr_arr.push(arr[i])
        Subset(arr, curr_arr, i + 1)
        curr_arr.pop()
    }
}

function runProgram(input) {
    input = input.trim().split('\n');
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    Subset(arr, [], 0)
    console.log(count);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`7
-3 -1 -10 8 -5 0 7 `);
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
