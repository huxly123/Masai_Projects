function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let num = +(input[line++]);
      
        
            let even = 0;
            let odd=0
       
        for (let i = 0; i <= num / 2; i++){
            if (num % i == 0&&i%2==0) {
                even++
            }
            else if (num % i == 0 && i % 2 == 1) {
                odd++
            }
        }
        if (num % 2 == 0) {
            even++
        } else {
            odd++
        }
        if (odd > even) {
            console.log("Odd Skewed");
        }
        else if (even > odd) {
            console.log("Even Skewed");
        } else {
            console.log("Not Skewed");
        }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
4
6
11
`);
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
