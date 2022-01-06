
// In this problem right=mid ,so we need to use while loop as left<right 



let minimum_number = -1
function minimum(arr, left, right) {
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] > arr[right]) {
            left=mid+1;
        }
        else if (arr[mid] < arr[right]) {
            minimum_number = arr[mid];
            right=mid;
        }
        else if (arr[mid] == arr[right]) {
 minimum_number = arr[mid];
 right = mid;
        }
    }
    return minimum_number
}

function runProgram(input) {
    input = input.trim().split("\n");
    let n = +(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
console.log(minimum(arr,0,n-1));
}
if (process.env.USERNAME === "huxly") {
  runProgram(`10
4 6 7 9 -2 -1 -1 1 2 3`);
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
