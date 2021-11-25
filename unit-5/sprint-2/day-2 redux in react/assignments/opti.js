function optimiseTheCurve(a, b, c, k) {
  var low = 0;
  var high = Number.MAX_SAFE_INTEGER;
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    var value = a * mid ** 2 + b * mid + c;
    if (value >= k) {
      high = mid;
    } else {
      low = mid + 1;
    }
    }
    if (high == 0) {
        return -1
    }
  return high;
}

function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let i = 0; i < cases; i++){
        let dim = input[line++].trim().split(" ").map(Number);
        let a = dim[0];
        let b = dim[1];
        let c = dim[2];
        let k = dim[3];
      
        console.log(optimiseTheCurve(a, b, c, k));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
3 2 24 15`);
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
