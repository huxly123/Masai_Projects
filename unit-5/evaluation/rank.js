function ran(arr, rank) {
  //2 2 2 2 1
    let temp=[]
  let lead = 1;
    let count = 0;
    temp.push(1)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i -1]) {
      count++;
      temp.push(lead)
    } else if (arr[i] !== arr[i-1]) {
      lead = lead + count+1;
      count = 0;

     temp.push(lead)
    }
    }
    let ans=0
    for (let i = 0; i < temp.length; i++){
        if (temp[i] < rank) {
            ans++
        }
    }
    return ans
}



function runProgram(input) {
    input = input.trim().split("\n");
    let cases = +(input[0]);
    let line=1
    for (let z = 0; z < cases; z++){
        let dim = input[line++].trim().split(" ").map(Number)
        let n = +(dim[0]);
        let rank = +(dim[1]);
        let arr = input[line++].trim().split(" ").map(Number);
        arr.sort((a,b)=>b-a)
console.log(ran(arr,rank));
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`1
5 3
2 2 2 2 1`);
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
