
function runProgram(input) {
input=input.trim().split("\n")
let cases=+(input[0])
let line=1;
let ans=[]
for(let p=0;p<cases;p++){
let size1=+(input[line++].trim())
let arr1=input[line++].trim().split(" ").map(Number);
let size2=+(input[line++].trim())
let arr2=input[line++].trim().split(" ").map(Number);
let arr=arr1.concat(arr2)
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
         if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp
        }
    }
}
//console.log(arr);
for(let i=0;i<arr.length;i++){
  let exists=false
  if(i==0){
      ans.push(arr[i]);
      exists=true
  }
  else{
  for(let j=0;j<ans.length;j++){
if(arr[i]==arr[j]){
    exists=true
}
  }
}
  if(exists==false){
      ans.push(arr[i])
  }
}

console.log(ans.join(" "));
}
}
if (process.env.USERNAME === 'huxly') {
  runProgram(`2
  4
  1 1 2 3 4
  5
  1 2 3 4 5
  4
  1 2 3 4 
5
5 4 3 2 1
  `);
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




