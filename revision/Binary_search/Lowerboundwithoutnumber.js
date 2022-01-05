let arr = [1, 2, 3, 5, 6]
let k = 4
let Upperbound_index=-1
function Lowerbound(arr, k, left, right) {
     while (left <= right) {
       let mid = Math.floor(left + (right - left) / 2);
       if (arr[mid] < k) {
         left = mid + 1;
       } else if (arr[mid] > k) {
         Upperbound_index = mid;
         right = mid - 1;
       } else if (arr[mid] === k) {
         left = mid + 1;
       }
     }
     return Upperbound_index-1;
}

console.log(Lowerbound(arr,k,0,arr.length-1));