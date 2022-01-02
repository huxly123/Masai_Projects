
//  Time comlexity --> Worst case => O(n^2)

//  Space Complexity ---> O(1)




function Sortt(arr, n) {
    for (let i = 0; i < n; i++){
        let swapped=false
        for (let j = 0; j < n - i; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped=true
            }
        }
        if (!swapped) {
            break
        }
    }
    console.log(arr);
}


function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
Sortt(arr,n)
}
if (process.env.USERNAME === "huxly") {
  runProgram(`5
3 5 5 5 1`);
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
