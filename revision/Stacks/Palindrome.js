function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let n = +(input[line++])
        let arr = input[line++].trim().split("");
        let obj={}
        for (let i = 0; i < n; i++){
            if (obj[arr[i]] === undefined) {
                obj[arr[i]]=1
            } else {
                obj[arr[i]]+=1
            }
        }
        let count = 0;
        let a = Object.values(obj);
        for (let i = 0; i < a.length; i++){
            if (a[i] % 2 != 0) {
                count++
            }
        }
        // console.log(a,count);
        if (n % 2 == 0) {
            if (count == 0) {
                console.log("Possible!");
            } else {
                console.log("Not Possible!");
            }
        } else {
            if (count == 1) {
                 console.log("Possible!");
            } else {
                console.log("Not Possible!");
             }
        } 
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
8
dcgfggbi`);
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
