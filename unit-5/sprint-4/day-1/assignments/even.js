function runProgram(input) {
    let str = input.trim().split("").map(Number);
  
    let left = 0;
    while (left < str.length) {
         var count = 0;
        for (let i = left; i < str.length; i++){
           
            if (str[i] % 2 == 0) {
                count++
            }

        }
        str[left]=count
     
        left++
    }
    console.log(str.join(" "));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`574674546476`);
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
