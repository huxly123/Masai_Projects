var count1 = 0;

function removeItemOnce(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}


function rec1(arr, cur_arr, curr,arr2) {
    for (let i = curr; i < arr.length; i++){
        let temp=arr2
        cur_arr.push(arr[i]);
        let flag=false
        for (let j = 0; j < cur_arr.length; j++){
            if (!arr2.includes(cur_arr[j])) {
                flag = true
                break;
            }
            if (arr2.includes(cur_arr[j])) {
                
removeItemOnce(arr2,cur_arr[j])

            }
         
        }
        if (flag == false) {
            console.log(cur_arr);
            if (count1 < cur_arr.length) {
                count1=cur_arr.length
            }
        }
        arr2 = temp
        console.log(arr2);
        rec1(arr, cur_arr, i + 1, arr2);
        cur_arr.pop();
    }
}

function runProgram(input) {
    input = input.trim().split("\n");
    let arr1 = input[0].trim().split("");
    let arr2 = input[1].trim().split("");
    rec1(arr1, [], 0, arr2)
    rec1(arr2, [], 0, arr1);
    console.log(count1);
}
if (process.env.USERNAME === "huxly") {
  runProgram(`eziowiomkvrrdzx
orugiebaolddavd`);
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
