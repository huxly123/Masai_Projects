
    var overlap = 0;
function find(arr, dept) {

    for (let i = 0; i < arr.length; i++){
        if (dept[i] > arr[i + 1]) {
            overlap++
        }
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let slot = input[0];
    let arrival = input[1].trim().split(" ").map(Number);
    let departure = input[2].trim().split(" ").map(Number);
    find(arrival, departure);
    if (overlap < slot) {
        console.log("Possible");
    } else {
        console.log("Not Possible");
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
1 3 5
2 6 8`);
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
