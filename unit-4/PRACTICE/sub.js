var res=0
function find(arr, curr_arr, curr, n) {
  
  for (let i = curr; i < arr.length; i++) {
    curr_arr.push(arr[i]);
      let count = 0;
    //  console.log(curr_arr);
      for (let z = 0; z < curr_arr.length; z++){
          if (curr_arr[z] % 2 == 1) {
              count++
          }
      }
      if (count >= n) {
          res++
      }
    find(arr, curr_arr, i + 1, n);
    curr_arr.pop();
    }
 
}

function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let i = 0; i < cases; i++) {
    let dim = input[line++].trim().split(" ").map(Number);
    let size = +dim[0];
    let n = +dim[1];
      let arr = input[line++].trim().split(" ").map(Number);
      let num=0
     find(arr, [], 0, n);
      console.log(res);
      res=0
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`2
4 2
4 3 2 1
2 1
2 3`);
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
