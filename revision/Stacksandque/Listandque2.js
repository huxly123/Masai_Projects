function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let ans=[]
    for (let z = 1; z <= cases; z++){
        let dim = input[z].trim().split(" ");
        let condition = dim[0];
        if (condition === "Push") {
            let num = +(dim[1]);
            ans.push(num)
        } else {
            if (ans.length == 0) {
                console.log("Empty");
            } else {
                console.log(ans.pop());
            }
        }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
Push 4
Push 5
Pop`);
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
