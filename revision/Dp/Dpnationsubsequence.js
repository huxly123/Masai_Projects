function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let str1 = input[line++].trim().split("");
      let str2 = input[line++].trim().split("");
      let right = 0
      let flag=true
      for (let i = 0; i < str1.length; i++){
          let happened=false
          while (right < str2.length) {
              if (str1[i] == str2[right]) {
                  happened=true
                  break
              }
              
              right++
          }
          if (!happened) {
              flag = false
              break
          }
      }
      if (flag) {
          console.log("YES");
      } else {
          console.log("NO");
      }
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
abc
adbce
ax
xaa`);
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
