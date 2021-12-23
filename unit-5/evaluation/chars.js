function runProgram(input) {
    let str = input.trim();
    let count = 0
    let ans=[]
    for (let i = 0; i < str.length; i++){
        count++
        if (str[i] !== str[i +1]) {
         
            ans.push(str[i]);
            ans.push(count)
               count = 0;
        }
    }
    console.log(ans.join(""));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`aaabbbbcc`);
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
