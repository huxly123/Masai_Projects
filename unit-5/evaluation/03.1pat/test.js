// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// let int=fruits[2]
// fruits.splice(2, 1);
// fruits.push(int)
// console.log(fruits);

// // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(1, 3);
// // console.log(citrus);

// // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(1, 3);
// // console.log(fruits);


// function rr(nums) {
//     let left = 0;
//     for (let i = 0; i < nums.length; i++){
//         if (nums[left] != 0) {
//             left ++;
//         } else {
//             let int = nums[left];
//             nums.splice(left, 1);
//             nums.push(int)
//         }
//     }
//     return nums
// }

// let arr = [0, 1, 2, 4, 0, 5]

// console.log(rr(arr));


// let arr = ["ga", "dd", "cc", "a"]
// console.log(arr.sort());

// function sub(str, new_str, curr) {
//   if (new_str.length > 0) console.log(new_str);
//   if (curr === str.length) return;
//   for (let i = curr; i < str.length; i++) {
//     new_str = new_str + str[i];
//     sub(str, new_str, i + 1);
//     new_str = new_str.slice(0, new_str.length - 1);
//   }
//   return "";
// }
// function pal(str) {
//     let left = 0;
//     let right = str.length - 1;
//     let occ = true;
//     while (left < right) {
//         if (str[left] !== str[right]) {
            
//         }
//     }
// }




function printSubStr(str,low,high)
{

    for (let i = low; i <= high; ++i)
// console.log(str[i]);
        return str[i]
}
 


function longestPalSubstr(str)
{


    let n = str.length;

    let maxLength = 1, start = 0;

  

  

    for (let i = 0; i < str.length; i++) {

        for (let j = i; j < str.length; j++) {

            let flag = 1;

  

            for (let k = 0; k < (j - i + 1) / 2; k++)

                if (str[i + k] != str[j - k])

                    flag = 0;

  

            if (flag!=0 && (j - i + 1) > maxLength) {

                start = i;

                maxLength = j - i + 1;

            }

        }

    }

  

  

    printSubStr(str, start, start + maxLength - 1);


    return maxLength;
}
 


let str = "forgeeksskeegfor";

console.log(longestPalSubstr(str));
 
