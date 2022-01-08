function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line = 1
    
    for (let z = 0; z < cases; z++){
       
        let n = +(input[line++])
        n=n*6
        let arr = input[line++].trim().split(" ").map(Number);
        let Ab = 0;
        let Vk = 0;
        let flag=true
        for (let i = 1; i <= n; i++){
            // console.log(arr[i-1]);
            if (flag) {
                Ab+=arr[i-1]
            } else {
                Vk+=arr[i-1]
            }
            if (arr[i-1] % 2 == 1) {
                flag = !flag
            }
            if (i % 6 == 0) {
    flag=!flag
}
        }
        if (Ab > Vk) {
           console.log("AB de Villiers");
        }
        else if (Vk > Ab) {
            console.log("Virat Kohli");
        } else {
            console.log("Tie");
        }
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
2
1 2 0 0 1 1 6 6 4 1 6 1
3
0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
1
0 1 0 1 0 0`);
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
