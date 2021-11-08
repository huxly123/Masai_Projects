/**
var arr = [2,3,6,10]
// var arr = [1,2,3]
// var arr = [0,1,2,3]
var flag = false
function sub(arr,curr_arr,curr,largest){
for(let i=curr;i<arr.length;i++){
    curr_arr.push(arr[i]);
  var sum = 0
  for (let j = 0; j < curr_arr.length; j++) {
    sum += curr_arr[j]
  }
  if (sum === largest) { 
    flag = true
    break;
  }
    // console.log(curr_arr.join(" "));
    sub(arr,curr_arr,i+1,largest);
    curr_arr.pop()
  }
}
arr.sort((a,b) => { return a - b })
var largest = arr.pop()
sub(arr,  [] ,  0, largest)

if (flag) {
  console.log('Yes')
} else {
  console.log('No')
}
 */

// Merge Sort

var input1 = [1, 5, 7, 9]
var input2 = [2, 4, 6, 8]

var arr = [...input1, ...input2]

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

console.log(mergeSort(arr,0,arr.length - 1).join(" "))