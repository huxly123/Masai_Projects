function runProgram(input) {
input=input.trim().split("\n");
let size=+(input[0]);
let arr=input[1].trim().split(" ").map(Number);
let obj={}
for(let i=0;i<size;i++){
    if(obj[i]==null){
        obj[i]=arr[i]
    }
}
let a=Object.keys(obj);

//sorting
for(let i=0;i<size;i++){
    for(let j=0;j<size-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            let temp1=a[j]
            arr[j]=arr[j+1];
            a[j]=a[j+1]
            arr[j+1]=temp
            a[j+1]=temp1
        }
    }
}

console.log(a.join(" "));
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`5
  4 5 3 7 1`);
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
