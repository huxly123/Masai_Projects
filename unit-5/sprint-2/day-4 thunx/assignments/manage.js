function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0].trim());
    let line=1
    for (let i = 0; i < cases; i++){
        let n = +(input[line++].trim())
        let x = +(input[line++].trim())
        let y = +(input[line++].trim())
        let anssum=0
        let arr1 = [];
        let arr2=[]
        for (let j = 0; j < n; j++){
            let dim = input[line++].trim().split(" ").map(Number);
            arr1.push(dim[0]);
            arr2.push(dim[1])
        }
        arr1 = arr1.sort((a, b) => a - b);
        arr2 = arr2.sort((a, b) => a - b);
        let left=0
        for (let k = 0; k < arr2.length; k++){
            let sum = 0;
            sum = arr1[left] - arr2[left];
            left++
            if (sum < 0) {
                anssum+=Math.abs(sum)*x
            }
            if (sum > 0) {
                 anssum+=Math.abs(sum)*y
            }
        }
        console.log(anssum);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
3
6
4
3 1
1 2
1 2`);
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
