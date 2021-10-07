function runProgram(input) {
    input=input.trim().split('\n');
let n=+(input[0]);
const arr=input[1].trim().split(" ").map(Number);
let obj={}
for(let i=0;i<n;i++){
  if(obj[arr[i]]==null){
    obj[arr[i]]=i
  }
}
let arr1=Object.keys(obj);
let index=Object.values(obj);

for(var i=0;i<n-1;i++){
  for(var j=0;j<n-i-1;j++){
      if(arr[j]>arr[j+1]){
          var temp=arr[j];
          arr[j]=arr[j+1]
          arr[j+1]=temp

      }
  }
}
let ans=[]
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        if(arr[i]==arr1[j]){
ans.push(j);
break
        }
    }
}
console.log(index.join(" "));

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
