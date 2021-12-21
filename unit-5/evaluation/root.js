function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++]);
        let great = Number.MIN_SAFE_INTEGER;
      let sqrnum = -1
      let found = false
      let i=0
      while (!found) {
         if (i *i > n) {
            sqrnum = i - 1;
           found=true
          }else if(i *i == n){
           sqrnum = i;
            found = true;
            
        }
        i++
      }
        console.log(sqrnum);
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
