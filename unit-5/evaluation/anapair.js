function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let count=0
        let n = +(input[line++]);
        let obj = {}
        let arr=[]
        for (let i = 0; i < n; i++){
            arr.push(input[line++])
        }
        for (let i = 0; i < arr.length; i++){
            let temp = arr[i].split("").sort().join("");
           
            if (obj[temp] === undefined) {
                obj[temp]=1
               count++
           }
        }
        // console.log(obj);
        console.log(count);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
5
aaaaabbbbb
baabbbbaaa
aaaabbbbba
xxxxxxxxxy
yxxxxxxxxx
2
abcdefghij
jighdefabc
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
