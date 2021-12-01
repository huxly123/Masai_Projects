var flag=false
function rec(arr, curr_arr, curr, target) {
    for (let i = curr; i < arr.length; i++){
        curr_arr.push(arr[i])
        let sum=0
        for (let j = 0; j < curr_arr.length; j++){
            sum+=curr_arr[j]
        }
        if (sum == target) {
            flag=true
        }
rec(arr,curr_arr,i+1,target)
        curr_arr.pop()
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0].trim());
    let arr = input[1].trim().split(" ").map(Number);
    let target = +(input[2].trim())
    rec(arr, [], 0, target);
    if (flag == true) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`9
1 2 3 4 5 6 7 8 9
5`);
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
