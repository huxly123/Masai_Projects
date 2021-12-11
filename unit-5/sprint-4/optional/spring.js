

function spring(arr, temp) {
    
    for (let i = 1; i < arr.length; i++){
        let now=[]
        
        for (let j = 0; j < arr[0].length; j++){
            if (j == 0) {
                let a = Math.max(arr[i][j] + temp[0], arr[i][j] + temp[1]);
                now.push(a)
            }
           else if (j == arr[0].length - 1) {
                  let a = Math.max(arr[i][j] + temp[j], arr[i][j] + temp[j-1]);
                  now.push(a);
            }
            else if (j > 0 && j < arr[0].length - 1) {
                let a = Math.max(
                  arr[i][j] + temp[j - 1],
                  arr[i][j] + temp[j],
                arr[i][j]+temp[j+1],);

                now.push(a)
           }
        }
        temp=now
    }
    let max=0
    for (let i = 0; i < temp.length; i++){
        if (max < temp[i]) {
            max=temp[i]
        }
    }
    return max

}



function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0])
    let line = 1;
    for (let z = 0; z < cases; z++){
        let arr=[]
        let dim1 = input[line++].trim().split(" ").map(Number);
        let n = +(dim1[0]);
        let c = +(dim1[1]);
        for (let i = 0; i < n; i++){
            let temp = input[line++].trim().split(" ").map(Number);
            arr.push(temp)
        }
        let temp = arr[0]
       console.log(spring(arr,temp));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
6 5
3 1 7 4 2
2 1 3 1 1
1 2 2 1 8
2 2 1 5 3
2 1 4 4 4
5 2 7 5 1`);
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
