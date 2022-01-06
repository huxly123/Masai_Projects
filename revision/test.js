// let arr = [[1, 2], [2, 4], [3, 5]]
// let n = [2, 2]
const arr = ["a", "b", "d"];

let start = 2;
let deleteCount = 0;
arr.splice(start, deleteCount, "c");
console.log(arr);