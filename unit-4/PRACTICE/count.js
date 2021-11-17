
function doo(arr) {
    let obj={}
    arr = arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++){
        if (obj[arr[i]] === undefined) {
            obj[arr[i]]=1
        }
        else {
            obj[arr[i]]=obj[arr[i]]+1
        }
    }
    return obj
}

function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0])
    let line=1
    for (let i = 0; i < cases; i++){
        let size = +(input[line++])
        let arr = input[line++].trim().split("").map(Number);
        let obj1 = doo(arr)
        let a = Object.keys(obj1)
        a = a.map(Number)
        b = Object.values(obj1)
        let ans=[]
        for (let i = 0; i < 10; i++){
            if (obj1[i] === undefined) {
                ans.push(0)
            } else {
                ans.push(obj1[i])
            }
        }
        console.log(ans.join(" "));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
5
21321
6
235452`);
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
