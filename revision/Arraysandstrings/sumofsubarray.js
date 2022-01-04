function runProgram(input) {
  input = input.trim().split("\n");
  let cases = +input[0];
  let line = 1;
  for (let z = 0; z < cases; z++) {
    let dim = input[line++].trim().split(" ").map(Number);
    let n = +dim[0];
    let k = +dim[1];
    let arr = input[line++].trim().split(" ").map(Number);
    let occ=false
      let left = 0;
      let right = 0;
      let sum=0
      while (right < n) {
          if (sum < k) {
              sum+=arr[right]
              right++;
              
          } if (sum > k) {
              sum -= arr[left]
              left++;
          } if (sum == k) {
              occ = true
              break
        }
    }
      if (occ) {
          console.log("Yes");
      } else {
          console.log("No");
      }
  }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`3
5 3
1 2 1 3 4
4 5
1 2 1 3
2 1
3 1`);
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



//  while (end < arr.length) {
//    if (sum > target) {
//      sum -= arr[start];
//      start++;
//    } else if (sum < target) {
//      sum += arr[end];
//      end++;
//    }
//    if (sum === target) {
//      // console.log(start, end - 1);
//      flag = true;
//      break;
//    }
//  }