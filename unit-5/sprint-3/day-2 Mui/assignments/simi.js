function runProgram(input) {
     input = input.trim().split("\n");
     let arr1 = input[0].trim().split("");
    let arr2 = input[1].trim().split("");
    var count = 0;
    for (let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])) {
            var index=arr2.indexOf(arr1[i])
            count++
            arr2.splice(index,1)
        }
    }
    console.log(count);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`AEDFHR
ABCDGH`);
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
