let Upperbound_index = -1;
let Lowerbound_index = -1;
function Lowerbound(arr, k, left, right) {
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (arr[mid] < k) {
            left=mid+1;
        }
       else if (arr[mid] > k) {
            right=mid-1;
        }
       else if (arr[mid] === k) {
            Lowerbound_index = mid;
            right=mid-1;
        }
    }
    return ""
}

function Upperbound(arr, k, left, right) {
    if (left > right) {
        return ""
    }
    let mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] < k) {
        Upperbound(arr,k,mid+1,right)
    }
   else if (arr[mid] > k) {
        Upperbound_index = mid;
        Upperbound(arr,k,left,mid-1)
    }
    else if (arr[mid] === k) {
        Upperbound(arr,k,mid+1,right)
}
}


function runProgram(input) {
     input = input.trim().split("\n");
     let dim = input[0].trim().split(" ").map(Number);
     let n = +dim[0];
     let k = +dim[1];
    let arr = input[1].trim().split(" ").map(Number);
    Lowerbound(arr, k, 0, n - 1)
    Upperbound(arr,k,0,n-1)
  console.log(Upperbound_index , Lowerbound_index);
    if (Upperbound_index == -1) {
        Upperbound_index = n 
         console.log(Upperbound_index - Lowerbound_index);
    } else {
            console.log(Upperbound_index - Lowerbound_index);
    }
}
if (process.env.USERNAME === "huxly") {
  runProgram(`10 22
2 2 2 2 2 11 15 18 20 22`);
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
