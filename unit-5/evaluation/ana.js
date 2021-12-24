function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split("");
    arr = arr.sort()
    console.log(arr);
    let obj = {}
    for (let i = 0; i < n; i++){
      
        if (obj[arr[i]] === undefined) {
            obj[arr[i]]=1
        } else {
            obj[arr[i]] = obj[arr[i]]+1
        }
    }
    // for (key in obj){
    //     console.log(`${key}-${obj[key]}`);
    // }
    
}
if (process.env.USERNAME === "huxly") {
  runProgram(`31
xiysdrfjgthkdehkyqquroroiujztqg`);
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
