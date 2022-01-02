


//https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews/RM1BDv71V60 
//   knapsack clear understand Diagram!!


function knap(wtArr, valArr, n, capacity) {
    if (n < 0 || capacity == 0) {
        return 0
    }
    if (wtArr[n] > capacity) {
        return knap(wtArr,valArr,n-1,capacity)
    }
    else {
    return Math.max(valArr[n]+ knap(wtArr,valArr,n-1,capacity-wtArr[n]),knap(wtArr,valArr,n-1,capacity))
   
    }
}


let val = [8, 4, 0, 5, 3];
let wt = [1, 2, 3, 2, 2];
let n = wt.length - 1;
let capacity = 4;

console.log(knap(wt, val, n, capacity));