function runProgram(input) {
     input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++) {
        let dim = input[line++].trim().split(" ").map(Number);
        let k = +(dim[1])
        let arr = input[line++].trim().split(" ").map(Number);
        let occ=false
        if (arr.length <= 1) {
           
            console.log(-1);
        } else {
            for (let i = 0; i < arr.length; i++){
                for (let j = i; j < arr.length; j++){
                    if (arr[i] + arr[j] == k) {
                        console.log(arr[i] , arr[j]);
                        occ = true
                        break
                    }
                }
                if (occ == true) {
                    break
                }
            }
            if (occ) {
                console.log(1);
            } else {
                console.log(-1);
            }
        
        }
       }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
2 4
2 -2`);
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
