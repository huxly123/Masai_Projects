function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1;
    for (let z = 0; z < cases; z++){
        let n = +(input[line++]);
        let arr = input[line++].trim().split(" ").map(Number);
        let max=0
        for (let i = 0; i < n; i++){
            let subArr=[]
            for (let j = i; j < n; j++){
                subArr.push(arr[j])
                let flag=true
                for (let k = 0; k < subArr.length-1; k++){
                    if (subArr[k] < subArr[k + 1]) {
                        
                    } else {
                        flag=false
                    }
                }
                if (flag) {
                    // console.log(subArr);
                    if (subArr.length > max) {
                        max=subArr.length
                    }
                }
            }
        }
        console.log(max);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
2
1 1
6
1 2 1 2 3 1
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
