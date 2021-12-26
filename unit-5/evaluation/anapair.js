function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        
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
               
            } else {
              obj[temp]+=1
           }
      }
      let ans=0
      for (let key in obj) {
      ans+=obj[key]*(obj[key]-1)/2
      }
      console.log(ans);
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
