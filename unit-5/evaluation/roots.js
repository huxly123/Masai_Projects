function mid(l, r, n) {
    
    if (r*r <= n) {
        return r
    }
    mid(l,r/2,n)
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let n = +input[line++];
    let great = Number.MIN_SAFE_INTEGER;
    let sqrnum = -1;
    let found = false;
    let i = 0;
      let l = 0;
      let r = n
     console.log(mid(l, r, n));
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
4
8`);
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
