var flag = false
let ans=-1

function bound(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] >= target) {
          ans=mid
            right=mid-1
        }
        if (arr[mid] == target) {
            flag=true
        }
        else if (arr[mid] < target) {
            left=mid+1
        }
      
    }


}

function runProgram(input) {
    input = input.trim().split("\n");
    let n=+(input[0].trim())
    let arr = input[1].trim().split(" ").map(Number);
    let target = +(input[2].trim());

    bound(arr, target);
    if (flag == true) {
        console.log(ans);
    } else {
        console.log(ans);
    }

}
if (process.env.USERNAME === "huxly") {
  runProgram(`4
1 3 5 6
2 `);
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
