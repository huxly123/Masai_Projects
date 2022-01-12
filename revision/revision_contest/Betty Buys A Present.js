let flag=false
function subseq(arr, curr_arr, curr, k, amount) {
    if (curr_arr.length == k) {
        let sum = 0;
        for (let i = 0; i < curr_arr.length; i++){
            sum+=curr_arr[i]
        }
        if (sum == amount) {
            flag=true
            console.log(curr_arr.join(" "));
        }
    }
    if (curr_arr.length ==arr.length) {
        return 
    }
    for (let i = curr; i < arr.length; i++){
        curr_arr.push(arr[i])
        subseq(arr, curr_arr, i + 1,k,amount)
        curr_arr.pop()
    }
}

function runProgram(input) {
    let [amount, k] = input.trim().split(" ").map(Number);
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    subseq(arr, [], 0, k, amount)
    if (!flag) {
        console.log(-1);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`8 2`);
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
