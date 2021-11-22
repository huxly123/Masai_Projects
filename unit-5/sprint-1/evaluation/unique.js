function runProgram(input) {
    let str = input.trim()
    let obj = {}
    for (let i = 0; i < str.length; i++){
        if (obj[str[i]] === undefined&&str[i].trim()!="") {
            obj[str[i]]=1
        }
        else {
            obj[str[i]]=obj[str[i]]+1
        }
    }
    let val = Object.values(obj)
    let flag=false
    for (let i = 0; i < val.length; i++){
        if (val[i] !== 1) {
            console.log("No");
            flag=true
            break
        }
        
    }
    if (flag == false) {
        console.log("Unique");
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`masi`);
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
