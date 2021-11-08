function mergeSort(arr, i, j) {
    if(i >= j) return // base case
    var mid = Math.floor((i + j) / 2)
    mergeSort(arr,i, mid)
    mergeSort(arr, mid + 1, j)
    return merge(arr,mid,i,j)
  }
  
  function merge(arr, mid, i, j) {
    let mergeArr = []
  
    var temp1 = []
    var temp2 = []
  
    for (let k = i; k <= mid; k++) {
      temp1.push(arr[k])
    }
  
    for (let l = mid + 1; l <= j; l++) {
      temp2.push(arr[l])
    }
    
    while (temp1.length && temp2.length) {
      mergeArr.push(temp1[0] < temp2[0] ? temp1.shift() : temp2.shift())
    }
  
    while (temp1.length) {
      mergeArr.push(temp1.shift())
    }
  
    while (temp2.length) {
      mergeArr.push(temp2.shift())
    }
    return mergeArr
  }
function runProgram(input) {
input=input.trim().split("\n");
let input1=input[1].trim().split(" ").map(Number);
let input2=input[2].trim().split(" ").map(Number);
let arr=[...input1,...input2];

console.log(mergeSort(arr,0,arr.length - 1).join(" "))
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`4
  1 5 7 9
  2 4 6 8`);
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


