function Perm(arr, temp) {
    if (temp.length === arr.length) {
        console.log(temp.join(" "));
    }
    for (let i = 0; i < arr.length; i++){
        if(temp.includes(arr[i])) continue
        temp.push(arr[i]);
        Perm(arr, temp)
        temp.pop()
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
Perm(arr,[])
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
1 2 3`);
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
