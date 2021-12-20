function getDifferentNumber(arr) {
  let ans = 1;
    arr = arr.sort((a, b) => a - b);
   
    for (let i = 0; i <= arr.length; i++) {
    //    console.log(arr[i]);
      if (arr[i] !== i) {
       
      ans = i;
      break;
    }
  }
  return ans;
}
let arr = [0, 1, 2]

console.log(getDifferentNumber(arr));